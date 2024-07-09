import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://kartikeysharmakamesh2707:kbrDaEW5zRB8GyHv@kartikeysharma.tntpmaf.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
