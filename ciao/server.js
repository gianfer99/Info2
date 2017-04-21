'use strict';
const express = require('express');
const app = express();

app.listen(8000, () => { 
		console.log("Server in ascolto sulla porta 8000");
});

app.get('/', (req,res) => {
		res.send('Homepage');
});

app.get('/supplica', (req,res) => {
		res.send('Supplica');
});

app.get('*', (req,res) => {
		res.send('Cosa??', 404);
});
