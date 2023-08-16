const express = require('express');
const router = express.Router();
const {sendMail} = require('../../controllers/contactController');
const {generateResume, generateResumeForGivenDescription, getBulletPoints,getCoverLetterBody } = require('../../controllers/resumeController');
const {generatePdf} = require('../../controllers/pdfController');
const {upgradeUser} = require('../../controllers/userController');
const {userLogout} = require('../../controllers/authController');

router.post('/contact', sendMail);
router.post('/generate-resume', generateResume);
router.post('/generate-resume-for-given-description', generateResumeForGivenDescription);
router.post('/getBulletPoints', getBulletPoints);
router.post('/getCoverLetterBody', getCoverLetterBody);
router.post('/generate-pdf', generatePdf);
router.post('/upgrade-plan', upgradeUser);
router.post('/logout', userLogout);

module.exports = router;