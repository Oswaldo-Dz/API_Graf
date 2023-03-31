const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());
//Settings
//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const data ={
categories: ["Shi","Wo","Chi","Pa","Hi","So"],
values: [5, 20, 36, 10, 10, 20]
    }
const data2 ={
   categories: ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",],
   values:[97,120,112,114,113,60,121,166,159,178,221,254,294,400,422,373]
}
const data3 ={
   categories: ["Cuba","Costa Rica","Honduras","Paraguay","Guatemala","Bolivia","Ecuador","Chile","Argentina","Colombia","Peru","Mexico","Brasil"],
   values:[8530,8887,10989,19494,19626,22212,35873,60696,129769,141708,216003,329652,684425]
}
const data4={
   
   values:[20,19,18,15]
}
//GET
app.get('/', (req, res) => {    
   res.json(data);
});
app.get('/g1', (req, res) => {    
   res.json(data2);
});
app.get('/g2', (req, res) => {    
   res.json(data3);
})
app.get('/g4',(req,res)=>{
   res.json(data4)
})
//Start Server
app.listen(3000,() => {
   console.log(`Server on port ${3000}`);
});