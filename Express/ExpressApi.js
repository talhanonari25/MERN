// const express = require('express');
// const user = require('./Model/userSchema');


// const app= express();
// app.use(express.json());

// app.post('/create', async (req, res)=>{
//     let data = new user(req.body);
//     let result = await data.save();
//     res.send(result);
// });

// app.get('/show', async (req, res)=>{
//     let data = await user.find();
//     res.send(data);
// });

// app.put('/update/:_id', async (req, res)=>{
//     let data =await user.updateOne(
//         req.params,
//         {
//             $set:req.body
//         }
//     )
//     res.send("User Updated Successfully");
// });

// app.delete('/delete/:_id', async (req, res)=>{
//     let data = await user.deleteOne(req.params)
//     res.send("User Deleted Successfully");
// });

// app.listen(4000,()=>{
//     console.log('Server is Running on Port 4000')
// });