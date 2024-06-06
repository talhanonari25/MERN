const dbConnect = require('./mongoDb')

const dbData = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
}

dbData();

// app.get('',(req, res)=>{
//     res.send('WelCome To HomePage!!!')
// });
// app.get('/about',(req, res)=>{
//     res.send("WelCome To About Us Page")
// });
// app.get('/contact',(req, res)=>{
//     res.send("WelCome To Contact Us Page")
// });
// app.get('*',(req, res)=>{
//     res.send('Error 404: Page Not Found')
// })

// app.listen(4000,()=>{
//     console.log('Server is Running on Port 4000')
// });