const express = require('express');
const connection = require('../db');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  const query = `
    INSERT INTO mensajes
    (nombre, correo, asunto, mensaje)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(query, [nombre, correo, asunto, mensaje], (err, result) => {
    if (err) {
      return next(err);
    }

    return res.status(201).json({
      id: result.insertId,
      nombre,
      correo,
      asunto,
      mensaje
    });
  });
});

module.exports = router;
