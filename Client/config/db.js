require('dotenv').config();
const mongoose= require('mongoose')
const mongourl= process.env.MONGO||"mongodb+srv://admin:admin@nivash.nrt23.mongodb.net/?retryWrites=true&w=majority&appName=nivash"
mongoose.connect(mongourl)
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB error:', err));
module.exports=mongoose;