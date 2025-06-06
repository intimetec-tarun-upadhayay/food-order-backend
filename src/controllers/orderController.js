const { createOrder } = require('../db/orderModel');
const { validateOrder } = require('../validators/orderValidator.js');

exports.createOrder = (req, res) => {
  const { error } = validateOrder(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  createOrder(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Order created', orderId: result.orderId });
  });
};