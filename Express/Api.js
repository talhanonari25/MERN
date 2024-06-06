const express = require('express');
const mongoDb = require('mongodb')
const dbConnect= require('./mongoDb')

const app = express();
app.use(express.json());

app.get('/', async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
});

app.post('/', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})

app.put('/:name', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    res.send(result);
})

app.delete("/:id", async (req, res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
    res.send("data delete Successfully")
})

app.listen(4000,()=>{
    console.log('Server is Running on Port 4000')
});