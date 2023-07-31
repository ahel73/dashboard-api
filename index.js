import express from "express";

const port = 8000
const app = express() // Создаём сервер

// Маршрутизация
app.get('/hello', (req, res) => {
    res.send('Привет!')
})

// Слушатель подключения сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
})
