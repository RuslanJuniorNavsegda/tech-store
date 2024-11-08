const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Маршрут для получения списка продуктов
app.get('/api/products', (req, res) => {
  fs.readFile('./src/data/products.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Ошибка сервера');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
