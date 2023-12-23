const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, 'static/counter.json');
const data = JSON.parse(fs.readFileSync(pathFile, "utf-8"));
fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));

const express = require('express');
const app = express();

if (data.countMain == null) {
    data.countMain = 0;
};

if (data.countAbout == null) {
    data.countAbout = 0;
};

app.get('/', (req, res) => {
    data.countMain++;
    fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
    res.send(`<h1>Главная страница</h1><h2>Счетчик main: ${data.countMain}</h2><a href='/about'>go-about</a>`);
});

app.get('/about', (req, res) => {
    data.countAbout++;
    fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
    res.send(`<h1>Страница about</h1><h2>Счетчик about: ${data.countAbout}</h2><a href='/'>go-main</a>`);
});

app.listen(3000, () => console.log("Сервер запущен"));