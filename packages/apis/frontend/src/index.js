const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Microservices Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 40px;
                        background-color: #f0f0f0;
                    }
                    .container {
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #333;
                    }
                    #greeting, #time {
                        margin: 20px 0;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Aqui é o serviceFrontEnd, teste GIT</h1>
                    <div id="greeting">Loading greeting...</div>
                    <div id="time">Loading time...</div>
                </div>
                <script>
                    setInterval(() => {
                        fetch('http://service-greeting:3001/greeting')
                            .then(res => res.text())
                            .then(text => document.getElementById('greeting').innerHTML = text)
                            .catch(err => document.getElementById('greeting').innerHTML = 'Error loading greeting');
                        
                        fetch('http://service-time:3002/time')
                            .then(res => res.text())
                            .then(text => document.getElementById('time').innerHTML = text)
                            .catch(err => document.getElementById('time').innerHTML = 'Error loading time');
                    }, 1000);
                </script>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Frontend service running on port ${port}`);
});
