require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dbconn = require("./config/db"); 

const DishesRouter = require("./Router/Dishresipes");
const PostRouter = require("./Router/Postrouter"); 
const userRouter = require("./Router/Authuser");
const orderRouter = require("./Router/orderProduct");

const app = express();
const PORT = process.env.PORT || 7777; // ✅ Single port for both functionalities



// ✅ Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// ✅ Email Sending Route
app.post("/send-email", async (req, res) => {
    const { name, email, receiverEmail, subject, message } = req.body;

    if (!name || !email || !receiverEmail || !subject || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // ✅ Use .env for security
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: `"${name}" <${email}>`, // ✅ Sender's email
        to: receiverEmail, // ✅ Receiver's email
        subject: subject,
        text: `Sender: ${name} <${email}>\nReceiver: ${receiverEmail}\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

// ✅ API Routes
app.use("/post", PostRouter);
app.use("/dishes", DishesRouter);
app.use("/users", userRouter);
app.use("/orderproduct", orderRouter);

// ✅ Root Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Cooking Forum API!" });
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT}`);
});
