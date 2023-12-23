const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, 'users.json');
const data = JSON.parse(fs.readFileSync(pathFile, "utf-8"));
fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));

const express = require('express');
const app = express();

let uniqueID = 0;
const users = [];

app.use(express.json());

// получить всеx пользователей из users.json
app.get('/users', (req, res) => {
    res.send(data);
});

// получить конкретного пользователя из users.json
app.get('/users/:id', (req, res) => {
    const user = data.users.find((user) => user.id === Number(req.params.id));
    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

// создание пользователя в users.json
app.post('/users', (req, res) => {
    // вариант обработки
    if (!req.body.name) {
        return res.status(400).send({ error: "not name" })
    }
    if (!req.body.age) {
        return res.status(400).send({ error: "not age" })
    }

    uniqueID += 1;
    data.users.push({
        id: uniqueID,
        ...req.body
    });
    fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
    res.send(data);
});

// обновление пользователя в users.json
app.put('/users/:id', (req, res) => {
    const user = data.users.find((user) => user.id === Number(req.params.id));
    if (user) {
        user.name = req.body.name;
        user.age = req.body.age;
        fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

// удаление пользователя из users.json
app.delete('/users/:id', (req, res) => {
    const user = data.users.find((user) => user.id === Number(req.params.id));
    if (user) {
        const userIndex = data.users.indexOf(user);
        data.users.splice(userIndex, 1);
        fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

// обработчик несуществующих страниц
app.use((req, res) => {
    res.status(404).send({
        message: "URL not found"
    });
});

app.listen(3000, () => console.log("Сервер запущен")); 