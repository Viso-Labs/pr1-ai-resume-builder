const { PDFDocument } = require('pdf-lib');
const fs = require('fs');


const generatePdf = async (req, res) => {
    try {
        // Extract the necessary data from the request body
        const { fristname, surname, profession, district, biocountry, postalcode, phone, email,
         job_title,employer,city,country,start,end,sclname,scllocation,degree,gradestartdate
        ,filedofstudy,graductionendday,skill,summeary,type} = req.body;
        // Create a new PDF document
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
        // console.log('pdf: ',pdfDoc)
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync('generated.pdf', pdfBytes);
        // Return the path or download URL of the generated PDF to the frontend
        res.json({ downloadLink: 'http://localhost:3001/generated.pdf' });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
}

module.exports = {
    generatePdf,
}
