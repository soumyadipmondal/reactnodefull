const express = require('express');
const app = express();
const path = require('path');

const pathFile = path.resolve(__dirname, 'dummy.html');
const PORT = process.env.PORT || 4500

app.get('/', (req, res)=>{
    res.sendFile(pathFile)
});

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})