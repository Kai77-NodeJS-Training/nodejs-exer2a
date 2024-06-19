const express = require('express');

const app = express();

// 2A.2
// app.use((req, res, next) => {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second middleware");
//     res.send("<h1>Hello World</h1>");
// });

// 2A.3
app.get('/', (req, res) => {
    res.send("<h1>Base Page</h1>");
});

app.get('/users', (req, res) => {
    res.send("<h1>Users Page</h1>");
});

app.listen(3000);