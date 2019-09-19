const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');

const path = `/Users/frankzhang/Documents/web-dev/ranker/images`;
const port = 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let files = fs.readdirSync(`/Users/frankzhang/Documents/web-dev/ranker/images`);

const myStruct = {path, files}

app.get('/', (req, res)=>{
    res.send(myStruct);
})

app.listen(8080, console.log(`server listening on port ${port}`));