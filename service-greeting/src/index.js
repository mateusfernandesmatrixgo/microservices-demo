const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/greeting', (req, res) => {
    const greetings = [
        'Bem vindo ao Service Greeting!',
        'Welcome to our demo!',
        'Greetings, user!',
        'VocÊ por aqui!!'
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.send(randomGreeting);
});

app.listen(port, () => {
    console.log(`Greeting service running on port ${port}`);
});
