require("dotenv").config(); // ✅ Load environment variables
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// ✅ Email sending route
app.post("/send-email", async (req, res) => {
    const { name, email, receiverEmail, subject, message } = req.body;

    if (!name || !email || !receiverEmail || !subject || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // ✅ Setup Nodemailer transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // ✅ Use environment variables
            pass: process.env.EMAIL_PASS, // ✅ Secure password
        },
    });

    let mailOptions = {
        from: `"${name}" <${email}>`, // ✅ Shows sender's email in the "From" field
        to: receiverEmail, // ✅ Sends email to the receiver
        subject: subject, // ✅ Subject from form
        text: `Sender: ${name} <${email}>\nReceiver: ${receiverEmail}\n\n${message}`, // ✅ Includes both sender & receiver emails
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

// ✅ Root route to check server status
app.get("/", (req, res) => {
    res.send("Email Server is running.");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Email Server running on port ${PORT}`);
});
