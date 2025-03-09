const express = require('express');
const app = express();
const port = 3002;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/time', (req, res) => {
    const now = new Date().toLocaleString();
    res.send(`Current time: ${now}`);
});

app.listen(port, () => {
    console.log(`Time service running on port ${port}`);
});
