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

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Ready to Send");
//     }
// });

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
        const { fristname, surname, profession, district, biocountry, postalcode, phone, email,
         job_title,employer,city,country,start,end,sclname,scllocation,degree,gradestartdate
        ,filedofstudy,graductionendday,skill,summeary,type} = req.body;
        // Create a new PDF document
        console.log(req.body);
        const pdfDoc = await PDFDocument.create();
        // Add a new page to the document
        const page = pdfDoc.addPage();
        // Set up the content and formatting of the page
        page.drawText(`Profile Information`, { x: 150, y: 800 });

        if(fristname !== ""){
            page.drawText(`First Name:${fristname}`, { x: 50, y: 750 });
        }
        if(surname !== ""){
            page.drawText(`Surname: ${surname}`, { x: 300, y: 750 });
        }
        if(profession !== ""){
            page.drawText(`Profession: ${profession}`, { x: 50, y: 700 });
        }
        if(district !== ""){
            page.drawText(`District: ${district}`, { x: 300, y: 700 });
        }
        if(biocountry !== ""){
            page.drawText(`Country: ${biocountry}`, { x: 50, y: 650 });
        }
        if(postalcode !== ""){
            page.drawText(`Postal Code: ${postalcode}`, { x: 300, y: 650 });
        }
        // if(type !== ""){
        //     page.drawText(`User Type: ${type}`, { x: 150, y: 550 });
        // }

        if(phone !== ""){
            page.drawText(`Phone: ${phone}`, { x: 50, y: 600 });
        }
        if(email !== ""){
            page.drawText(`Email: ${email}`, { x: 300, y: 600 });
        }

        

        if(job_title !== ""){
            page.drawText(`WORK HISTORY Information`, { x: 150, y: 550 });
            page.drawText(`Job Title: ${job_title}`, { x: 50, y: 500 });
        }
        if(employer !== ""){
            page.drawText(`Employer: ${employer}`, { x: 300, y: 500 });
        }
        if(city !== ""){
            page.drawText(`City: ${city}`, { x: 50, y: 450 });
        }

        if(country !== ""){
            page.drawText(`Country: ${country}`, { x: 300, y: 450 });
        }
        if(start !== ""){
            page.drawText(`Start Date: ${start}`, { x: 50, y: 400 });
        }
        if(end !== ""){
            page.drawText(`End Date: ${end}`, { x: 300, y: 400 });
        }

        

        if(sclname !== ""){
            page.drawText(`EDUCATION Information`, { x: 150, y: 350 });
            page.drawText(`School Name: ${sclname}`, { x: 50, y: 300 });
        }
        if(scllocation !== ""){
            page.drawText(`School Location: ${scllocation}`, { x: 300, y: 300 });
        }
        if(degree !== ""){
            page.drawText(`Degree: ${degree}`, { x: 50, y: 250 });
        }
        if(gradestartdate!== ""){
            page.drawText(`Start Date: ${gradestartdate}`, { x: 300, y: 250 });
        }
        if(graductionendday !== ""){
            page.drawText(`End Date: ${graductionendday}`, { x: 50, y: 200 });
        }
        if(filedofstudy !== ""){
            page.drawText(`Field of Study: ${filedofstudy}`, { x: 300, y: 200 });
        }


        if(skill !== ""){
            page.drawText(`Your Skills`, { x: 150, y: 150 });
            page.drawText(`Skill: ${skill}`, { x: 50, y: 100 });
        }
        if(summeary !== ""){
            page.drawText(`Your Summery`, { x: 150, y: 80 });
            page.drawText(`Summery: ${summeary}`, { x: 50, y: 50 });
        }
        // Save the PDF to a file
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync('generated.pdf', pdfBytes);
        // Return the path or download URL of the generated PDF to the frontend
        res.json({ downloadLink: 'http://localhost:3001/generated.pdf' });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
