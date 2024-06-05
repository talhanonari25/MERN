// const os = require('os');
const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname, 'Crud');
const filePath = `${dirPath}/user.txt`;

// fs.writeFileSync(filePath, "This is sample file for user")

// fs.readFile(filePath,"utf8",(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, " and username is Talha.",(err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath, `${dirPath}/userData.txt`, (err)=>{
//     if(!err) console.log("File is Rename");
// })

// fs.unlinkSync(`${dirPath}/userData.txt`);


/*const userData = require('./User');

    console.log(userData)
    let user = os.userInfo();
    let date = new Date();
    let plat = os.platform();
    let message = `User ${user.username} open App using ${plat} platform at ${date}`;

    fs.appendFile("node.txt", message, (err)=>{
        if(err){
            console.log("Not able to Append file")
        }
    });     */

