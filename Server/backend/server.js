const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
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
// Start the server
app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
