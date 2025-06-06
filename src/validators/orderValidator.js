const Joi = require('joi');

exports.validateOrder = (order) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    order_date: Joi.date().required(),
    total: Joi.number().required(),
    items: Joi.array().items(
      Joi.object({
        product_id: Joi.number().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required()
      })
    ).required()
  });
  return schema.validate(order);
};