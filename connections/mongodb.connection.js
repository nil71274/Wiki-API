const mongoose= require("mongoose")

async function mongoConnect() {
    return mongoose
    .connect("mongodb+srv://nilesh290402:Somnath02@cluster0.6xgupq9.mongodb.net/wikiDB", { useUnifiedTopology: true }, { useNewUrlParser: true })
    .then(()=>{console.log("Mongodb Connected.");})
    .catch((err)=>{console.log("ERROR OCCURED", err)});
};

module.exports = {
    mongoConnect
}; 