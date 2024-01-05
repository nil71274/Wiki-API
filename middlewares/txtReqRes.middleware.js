const fs = require("fs");

async function txtReqRes(){
    return ((req, res, next) =>{
        fs.appendFile("log.txt", `\n${Date.now()} : ${req.ip} : ${req.path}`, (err, data)=>{
            if(err) console.log(err);
            else next();
        })
    });
};

module.exports = {
    txtReqRes
};