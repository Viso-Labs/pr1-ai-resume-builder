const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const User = require("../models/userModel");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function parseAndCleanJSON(inputString) {
    // Remove "\n", "\" and white spaces from the input string
    const cleanedString = inputString.replace(/\\n|\\/g, '').replace(/\s+/g, ' ');

    // Parse the cleaned string into a JSON object
    const jsonObject = JSON.parse(cleanedString);

    return jsonObject;
}
  
const generateResumeForGivenDescription = async (req, res) => {
    if (!configuration.apiKey) {
        res.status(500).json({
        error: {
            message: "OpenAI API key not configured",
        }
        });
        return;
    }

    const {description} = req.body;

    const prompt = `
        description:
        ${description} 
        \n 
        I need to:
        considering the above description, find the following parameter values and give a JSON object like the one below, somehow the suitable parameter value can not be found from the given description then keep it as a null ("").
                
                 fristname, surname, profession, district, biocountry, postalcode, phone, email,
                job_title,city,country,sclname,scllocation,degree,gradestartdate
               ,filedofstudy,graductionendday,skill,summeary,type
        
               explanation for the above parameters:
               fristname - first name
               surname - last name
               profession - profession
               district - living district
               biocountry - born country
               postalcode - postal code
               phone - contact number
               email - email
               job_title - the job looking for
               city - current living city
               country - current living country
               sclname - school name
               scllocation - school location
               degree - degree name
               gradestartdate - The date on which the degree was started
               filedofstudy - the areas, he or she studied
               graductionendday - The date on which the degree is/was finished
               skill - skills
               summeary - about him or her self
               type - acadamic cv or normal cv
        
               example for the output JSON object (this object should  remake with the above beginning description):
                {
                    "fristname": "saman",
                    "surname": "sugath",
                    "profession": "software engineer",
                    "district": "Colombo",
                    "biocountry": "sri lanka",
                    "postalcode": "12000",
                    "phone": "078564545",
                    "email": "s@gmail.com",
                    "job_title": "software engineer",
                    "city": "colombo",
                    "country": "sri lanka",
                    "sclname": "royal college",
                    "scllocation": "",
                    "degree": "computer science and engineering",
                    "gradestartdate": "23-01-2023",
                    "filedofstudy": "",
                    "graductionendday": "23-01-2027",
                    "skill": "",
                    "summeary": "",
                    "type": ""
                }
                \n language :English `;


    if (description.trim().length === 0) {
        res.status(400).json({
        error: {
            message: "Invalid prompt",
        }
        });
        return;
    }

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.8,
            max_tokens: 500, // Specify the desired maximum word count
            // stop: '\n' // Stop the completion at the first line break
        });

        const cvText = completion.data.choices[0].text.trim();
        const obj = parseAndCleanJSON(cvText)
        res.status(200).json({ cvText: obj });
    } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
        } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
            error: {
            message: 'An error occurred during your request.',
            }
        });
        }
    }
}


const getBulletPoints = async (req, res) => {
    if (!configuration.apiKey) {
        res.status(500).json({
        error: {
            message: "OpenAI API key not configured",
        }
        });
        return;
    }

    const {description} = req.body;

    const prompt = `
        Text:
        ${description} 
        \n 
        I need to:
        considering the above Text, convert the Text into bullet points, correcting grammar.
        \n language :English `;


    if (description.trim().length === 0) {
        res.status(400).json({
        error: {
            message: "Invalid prompt",
        }
        });
        return;
    }

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.8,
            max_tokens: 500, // Specify the desired maximum word count
            // stop: '\n' // Stop the completion at the first line break
        });

        const bulletPoints = completion.data.choices[0].text.trim();
        res.status(200).json({ bulletPoints: bulletPoints });
    } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
        } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
            error: {
            message: 'An error occurred during your request.',
            }
        });
        }
    }
}

const generateResume = async (req, res) => {
    console.log("object",req.body)
    const {user} = req.body;

    try {
        const currentUser = await User.findOne({ _id: user.id });
        if (!currentUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        if (currentUser.resumeCount > 0) {
            currentUser.resumeCount--;
            const updatedUser = await currentUser.save();
            return res.status(200).json({
                message: "Generate resume successfully",
                success: true
            });
        } else {
            return res.status(400).json({ success: false, message: 'Insufficient resume count' });
        }
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
    
}

const generateCoverLetter = async (req, res) => {
    const {user} = req.body;
    console.log('user: ',user)
    try {
        const currentUser = await User.findOne({ _id: user.id });
        if (!currentUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        if (currentUser.coverLetterCount > 0) {
            currentUser.coverLetterCount--;
            const updatedUser = await currentUser.save();
            return res.status(200).json({ success: true, message: "generated cover letter successfully" });
        } else {
            return res.status(400).json({ success: false, message: 'Insufficient cover letter count' });
        }
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
    
}

const getCoverLetterBody = async (req, res) => {

    if (!configuration.apiKey) {
        res.status(500).json({
        error: {
            message: "OpenAI API key not configured",
        }
        });
        return;
    }

    const {postData} = req.body;

    console.log('postData: ',postData)


    const prompt = `
        json Object:
        ${postData} 
        \n 

        I need:
        considering the above details, give me a suitable example cover letter body.
        \n language :English `;

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.8,
            max_tokens: 500, // Specify the desired maximum word count
            // stop: '\n' // Stop the completion at the first line break
        });

        const coverLetterBody = completion.data.choices[0].text.trim();
        const isUpdateCoverLetterCount = await generateCoverLetter(req, res);
        if(isUpdateCoverLetterCount){
            res.status(200).json({ coverLetterBody: coverLetterBody });
        }else{
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(500).json(error.response.data);
        } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
            error: {
            message: 'An error occurred during your request.',
            }
        });
        }
    }
}


//already implemented
// const generateResume = async (req, res) => {
//     try {
//         // Extract the necessary data from the request body
//         const { name, contact, experience, education, skills } = req.body;
//         // Construct the prompt for generating the resume
//         const prompt = `
//         Resume:
//         Name: ${name}
//         Contact: ${contact}
//         Experience: ${experience}
//         Education: ${education}
//         Skills: ${skills}
//         `;
//         // Make a POST request to OpenAI API to generate the resume
//         // const response = await axios.post(
//         //     'https://api.openai.com/v1/engines/davinci-codex/completions',
//         //     {
//         //         prompt,
//         //         max_tokens: 200, // Adjust the desired length of the generated resume
//         //         temperature: 0.7, // Adjust the creativity of the generated text (0.0 to 1.0)
//         //         n: 1 // Generate a single response
//         //     },
//         //     {
//         //         headers: {
//         //             'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
//         //             'Content-Type': 'application/json'
//         //         }
//         //     }
//         // );

//         // Extract the generated resume text from the OpenAI response
//         const generatedResume = response.data.choices[0].text.trim();
//         // Return the generated resume to the client
//         res.json({ resume: generatedResume });
//     } catch (error) {
//         console.error('Error generating resume:', error);
//         res.status(500).json({ error: 'Failed to generate resume' });
//     }
// }

module.exports = {
    generateResume,
    generateResumeForGivenDescription,
    getBulletPoints,
    getCoverLetterBody,
    generateCoverLetter
}
