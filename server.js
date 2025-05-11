git add server.js
git commit -m "Added server.js"
git push origin main
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Render!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
