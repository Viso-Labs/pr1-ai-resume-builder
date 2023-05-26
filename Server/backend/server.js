const express = require('express');
const axios = require('axios');
const { PDFDocument } = require('pdf-lib');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require('fs');
const app = express();

// // Load the template
// const templatePath = 'path/to/template.pdf';
// const templateBytes = fs.readFileSync(templatePath);
// // Generate PDF using the template
// const pdfDoc = await PDFDocument.load(templateBytes);
// // Manipulate the PDF document, fill form fields, or add text/images
// // Save or serve the generated PDF
// const pdfBytes = await pdfDoc.save();
// fs.writeFileSync('path/to/generated.pdf', pdfBytes);



app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "apeniwanhala@gmail.com",
        pass: "Ape@5niwanhala",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
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
});


// API endpoint for receiving data and generating the resume
app.post('/generate-resume', async (req, res) => {
    try {
        // Extract the necessary data from the request body
        const { name, contact, experience, education, skills } = req.body;
        // Construct the prompt for generating the resume
        const prompt = `
 Resume:
 Name: ${name}
 Contact: ${contact}
 Experience: ${experience}
 Education: ${education}
 Skills: ${skills}
 `;
        // Make a POST request to OpenAI API to generate the resume
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt,
                max_tokens: 200, // Adjust the desired length of the generated resume
                temperature: 0.7, // Adjust the creativity of the generated text (0.0 to 1.0)
                n: 1 // Generate a single response
            },
            {
                headers: {
                    'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
                    'Content-Type': 'application/json'
                }
            }
        );
        // Extract the generated resume text from the OpenAI response
        const generatedResume = response.data.choices[0].text.trim();
        // Return the generated resume to the client
        res.json({ resume: generatedResume });
    } catch (error) {
        console.error('Error generating resume:', error);
        res.status(500).json({ error: 'Failed to generate resume' });
    }
});

// API endpoint for receiving data and generating the PDF
app.post('/generate-pdf', async (req, res) => {
    try {
        // Extract the necessary data from the request body
        const { fristname, surname, profession, district, country, postalcode, phone, email } = req.body;
        // Create a new PDF document
        console.log(req.body);
        const pdfDoc = await PDFDocument.create();
        // Add a new page to the document
        const page = pdfDoc.addPage();
        // Set up the content and formatting of the page
        page.drawText(`First Name: ${fristname}`, { x: 50, y: 700 });
        page.drawText(`Surname: ${surname}`, { x: 50, y: 650 });
        page.drawText(`Profession: ${profession}`, { x: 50, y: 600 });
        page.drawText(`District: ${district}`, { x: 50, y: 550 });
        page.drawText(`Country: ${country}`, { x: 50, y: 500 });
        page.drawText(`Postal Code: ${postalcode}`, { x: 50, y: 450 });
        page.drawText(`Phone: ${phone}`, { x: 50, y: 400 });
        page.drawText(`Email: ${email}`, { x: 50, y: 350 });
        // Save the PDF to a file
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync('generated.pdf', pdfBytes);
        // Return the path or download URL of the generated PDF to the frontend
        res.json({ downloadLink: 'http://localhost:3000/generated.pdf' });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
