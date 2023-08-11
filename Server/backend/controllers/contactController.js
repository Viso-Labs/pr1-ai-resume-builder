const nodemailer = require("nodemailer");


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "apeniwanhala@gmail.com",
        pass: "Ape@5niwanhala",
    },
});

const sendMail = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "shanratsarana@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
}

module.exports = {
    sendMail,
}
