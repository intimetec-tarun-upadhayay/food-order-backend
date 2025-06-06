const db = require('./index.js');

exports.createOrder = (orderData, callback) => {
  const { customer_id, order_date, total, items } = orderData;
  db.beginTransaction(err => {
    if (err) return callback(err);

    db.query(
      'INSERT INTO orders (customer_id, order_date, total) VALUES (?, ?, ?)',
      [customer_id, order_date, total],
      (err, results) => {
        if (err) return db.rollback(() => callback(err));

        const orderId = results.insertId;
        const itemsData = items.map(item => [orderId, item.product_id, item.quantity, item.price]);

        db.query(
          'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?',
          [itemsData],
          (err) => {
            if (err) return db.rollback(() => callback(err));
            db.commit(err => {
              if (err) return db.rollback(() => callback(err));
              callback(null, { orderId });
            });
          }
        );
      }
    );
  });
};