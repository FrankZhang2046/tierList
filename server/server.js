const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');

const port = 8080;
let cardStack = [];

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let files = fs.readdirSync(`/Users/frankzhang/Documents/web-dev/ranker/server/images`);
const myStruct = {path:'http://localhost:8080/', files};

app.use(express.static('images'));

app.get('/', (req, res)=>{
    if (cardStack.length !== 0) {
        res.send(cardStack);
    } else {
        res.send(myStruct);
    }
})

app.post('/', (req, res)=>{
    cardStack = req.body.cardStack;
    res.send('success');
})

app.listen(8080, console.log(`server listening on port ${port}`));