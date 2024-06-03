const os = require('os');
const fs = require('fs');
const userData = require('./User');

    console.log(userData)
    let user = os.userInfo();
    let date = new Date();
    let plat = os.platform();
    let message = `User ${user.username} open App using ${plat} platform at ${date}`;

    fs.appendFile("node.txt", message, (err)=>{
        if(err){
            console.log("Not able to Append file")
        }
    });