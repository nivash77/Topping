require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbconn = require('./config/db'); 

const DishesRouter = require('./Router/Dishresipes');
const PostRouter = require('./Router/Postrouter'); 
const userRouter=require('./Router/Authuser')
const orderRouter=require('./Router/orderProduct');
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true
}));
// app.use(cors(
//     {
//         origin: "https://cooking-forum-client.onrender.com",
//         methods : ["POST", "PUT", "GET", "DELETE"],
//         credentials : true,
//     })
// );

const port = 7777;
app.use('/post', PostRouter); 
app.use('/dishes', DishesRouter);
app.use('/users',userRouter);
app.use('/orderproduct',orderRouter); 
app.get('/', (req, res) => {
    res.json({ message: "Welcome" });
});

app.listen(port, () => { 
    console.log(`Server running on port: ${port}`);
});