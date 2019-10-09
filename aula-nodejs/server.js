const express = require('express');
const bodyparser = require('body-parser');
const bd = require('./bd');


const app = express( )
app.use(bodyparser.json());

app.get('/', (req,res) => {
    res.send('<h1>Hello Word!</h1>')
});

app.get('/alunos', (req,res) => {
    res.json('<ul> <li>jesse</li><li>gabriel</li> </ul>')
});
    


app.listen(3000,() => console.log('servidor online'));