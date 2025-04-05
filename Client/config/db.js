require('dotenv').config();
const mongoose= require('mongoose')
const mongourl= process.env.MONGO
mongoose.connect(mongourl)
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB error:', err));
module.exports=mongoose;