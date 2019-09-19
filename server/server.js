const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');

const port = 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let files = fs.readdirSync(`/Users/frankzhang/Documents/web-dev/ranker/server/images`);
const myStruct = {path:'http://localhost:8080/', files};

app.use(express.static('images'));

app.get('/', (req, res)=>{
    res.send(myStruct);
})

app.listen(8080, console.log(`server listening on port ${port}`));