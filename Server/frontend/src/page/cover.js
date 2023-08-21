import React, { useState, useEffect } from "react";
import "./cover.css";
import html2pdf from 'html2pdf.js';
import { Link, useNavigate, useLocation } from "react-router-dom";

const FrameComponent = () => {
  const location = useLocation();
  const resumeDetails = JSON.parse(localStorage.getItem("resumeDetails"));
  const coverLetterDetails = location?.state?.data ?? {};

  const downloadPdf = () => {
    const element = document.body;
    html2pdf().from(element).save('cover letter.pdf');
  };

  useEffect(() => {
    console.log('downloading...');
    downloadPdf();
  }, [resumeDetails])

  return (
    <div className="book">
      <div class="page">
        <div class="subpage">
          {/* <div className=" flex justify-center items-center h-screen bg-#fff"> */}
          <div className="john-smith-parent">
            <div className="john-smith">
              <b>{resumeDetails?.fristname} {resumeDetails?.surname}</b>
            </div>
            <div className="marketing-specialist">{resumeDetails?.profession}</div>
            <div className="flowerville-06012017">{resumeDetails?.district}, {resumeDetails?.biocountry}, {resumeDetails?.postalcode}</div>
            <div className="ms-katherine-bloomstein-container">
              <p className="ms-katherine-bloomstein">{coverLetterDetails?.mx} {coverLetterDetails?.letterReceiverName}</p>
              {/* <p className="blank-line">&nbsp;</p> */}
              <p className="blank-line">{coverLetterDetails?.letterReceiverPosition}</p>
            </div>
            <div className="xyz-company-099-peony-container">
              <p className="xyz-company">{coverLetterDetails?.companyName}</p>
              <p className="xyz-company">{coverLetterDetails?.companyAddress}, {coverLetterDetails?.postalCode}</p>
            </div>
            <div className="dear-katherine">Dear {coverLetterDetails?.letterReceiverName},</div>
            <div className="as-a-lifelong-container">
              <p className="xyz-company">
                {coverLetterDetails?.coverLetterDetails}
              </p>

              <p className="xyz-company">
                I am writing to express my interest in the {resumeDetails?.profession} at {coverLetterDetails?.companyName}. With my qualifications and experience, I believe I am an ideal candidate for the role. I am a {resumeDetails?.degree} degree holder in {resumeDetails?.sclname}, and have worked in the {resumeDetails?.profession} for the past 2 years. During my career, I have developed a variety of skills and knowledge that I believe make me an excellent fit for this position. 
. I am confident that my prior experience and skills in {resumeDetails?.filedofstudy} would make me a valuable asset for your team.I am excited by the prospect of joining your team, and believe that I would be a great addition to your organization. I am confident that I could make a positive contribution to your organization’s success.
Thank you for your time and consideration. I look forward to discussing the position and my qualifications with you further.
              </p>
              <br />
              <p className="xyz-company">Kind regards, </p>

              <p>{resumeDetails?.fristname} {resumeDetails?.surname}</p>
              <p className="xyz-company">
                P.S. - I would also value the opportunity to show you how my
                e-detailing solutions grew the combined sales of three ABC flagship
                products by a record-breaking 13% in one year.
              </p>
            </div>
            <div className="personal-info-phone-container">
              <div class="flex items-center">
                <img class="w-10 h-auto ml-" src={require('../assets/images/pngwing.png')} alt="Image" />
                <p class="xyz-company">
                  <b class="personal-info1"> Personal Info</b>
                </p>

              </div>



              <p className="xyz-company">
                <b className="personal-info1">&nbsp;</b>
              </p>
              <p className="xyz-company">
                <span className="phone1">Phone</span>
              </p>
              <p className="xyz-company">
                <span className="span">{resumeDetails?.phone}</span>
              </p>
              <p className="xyz-company">
                <span className="span">&nbsp;</span>
              </p>
              <p className="xyz-company">
                <span className="phone1">E-mail</span>
              </p>
              <p className="xyz-company">
                <span className="span">{resumeDetails?.email}</span>
              </p>
            </div>
            <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
