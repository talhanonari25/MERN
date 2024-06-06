const express = require('express');
const app = express();

app.get('',(req, res)=>{
    console.log('Request Query=>'+req.query.name)
    res.send('WelCome To HomePage!!!')
});
app.get('/about',(req, res)=>{
    res.send("WelCome To About Us Page")
});
app.get('/*',(req, res)=>{
    res.send('Error 404: Page Not Found')
})


app.listen(4000);