const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// http://127.0.0.1:3000/
app.get('/service', (req, res) => {
    var user_name = req.param('status=on')
    res.send('The system is running [Status: ON]{' + user_name + '}');
});
app.listen(port, () => console.log('Example app listening on port 3000'))