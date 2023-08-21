import React,{ useState, useEffect } from "react";
import './GeneratePdf.css'
import html2pdf from 'html2pdf.js';
import { Link, useNavigate, useLocation } from "react-router-dom";

function GeneratePdf(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const resumeDetails = location?.state?.data??{};
    console.log("resumeDetails::: ",resumeDetails);

    const downloadPdf = () => {
        const element = document.body;
        html2pdf().from(element).save('resume.pdf');
    };

    useEffect(() => {
        console.log('downloading...');
        downloadPdf();
    }, [resumeDetails])

    return (
        <div class="book">
            <div class="page">
                <div class="subpage">
                    <div className='firstrow'>
                        <h5 style={{ fontWeight: 'bold' }}>{resumeDetails?.fristname} {resumeDetails?.surname}</h5>
                        <h5 style={{ fontWeight: 'bold' }}>{resumeDetails?.profession}</h5>
                    </div>
                    <hr />
                    <div className='secondrow'>
                        <h6 style={{ fontWeight: 'normal', fontSize: '12px' }}>{resumeDetails?.phone}</h6>
                        <h6 style={{ fontWeight: 'normal', fontSize: '12px' }}>{resumeDetails?.email}</h6>
                        <h6 style={{ fontWeight: 'normal', fontSize: '12px' }}>{resumeDetails?.district} {resumeDetails?.biocountry} {resumeDetails?.postalcode}</h6>
                    </div>
                    <hr />
                    {/* Administrative Assistant with 7+ years of experience working directly for the CEO of Regions Financial, a Fortune 500 company. Possesses a Global MBA, impeccable written and verbal communication skills, and excellent interpersonal skills. */}
                    <div className='about'>
                        {resumeDetails?.summary}
                    </div>

                    <div className='expereance'>
                        <h6 style={{ textAlign: 'center' }}><b>Expereance</b></h6>
                        <h6 style={{ textAlign: 'center' }}>{resumeDetails?.job_title}, {resumeDetails?.start}-{resumeDetails?.end}</h6>
                        <h6 style={{ textAlign: 'center' }}><b>{resumeDetails?.employer}, {resumeDetails?.city}, {resumeDetails?.country} </b></h6>
                        <div className='list-expereance'>
                            {/* <ul style={{ listStyleType: 'disc' }}>
                                <li>Streamline direct office services such as departmental finances, records, budget preparation, personnel issues, and housekeeping, vastly reducing wasted time and saving $150,000 per year.</li>
                                <li>Read and analyze incoming reports and memos to determine their importance and plan their distribution across a staff of 15. </li>
                                <li>Conduct in-depth research, compile data, and prepare papers for consideration in biannual reviews presented to high-level executives and governing committees.</li>
                                <li>Prepare daily memos, reports, invoices, financial statements, and other documents using word processing, database, spreadsheet, or presentation software.</li>
                            </ul> */}
                        </div>
                    </div>

                    <div className='expereance'>
                        <h6 style={{ textAlign: 'center' }}><b>Affiliations</b></h6>
                        {/* <h6 style={{ textAlign: 'center' }}>Rehabilitation Counselor, Sep 2008-Jul 2012</h6>
                        <h6 style={{ textAlign: 'center' }}><b>Virginia Department of Social Services, Richmond, VA </b></h6> */}
                        <div className='list-expereance'>
                            <h6 style={{ textAlign: 'center' }}>{resumeDetails?.affiliations}</h6>
                        </div>
                    </div>

                    <div className='expereance'>
                        <h6 style={{ textAlign: 'center' }}><b>Accomplishments</b></h6>
                        {/* <h6 style={{ textAlign: 'center' }}>Rehabilitation Counselor, Sep 2008-Jul 2012</h6>
                        <h6 style={{ textAlign: 'center' }}><b>Virginia Department of Social Services, Richmond, VA </b></h6> */}
                        <div className='list-expereance'>
                            <h6 style={{ textAlign: 'center' }}>{resumeDetails?.accomplishments}</h6>
                        </div>
                    </div>

                    {/* <div className='expereance'>
                        <h6 style={{ textAlign: 'center' }}><b>Expereance</b></h6>
                        <h6 style={{ textAlign: 'center' }}>Secretary, Jun 2007-Aug 2008</h6>
                        <h6 style={{ textAlign: 'center' }}><b>Bright Spot LTD, Boston, MA</b></h6>

                        <div className='list-expereance'>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Typed documents such as correspondence, drafts, memos, and emails, and prepared 3 reports weekly for management.</li>
                                <li>Opened, sorted, and distributed incoming messages and correspondence.</li>
                                <li>1984</li>
                                <li>Purchased and maintained office supply inventories and adhered to budgeting practices.</li>
                            </ul>
                        </div>
                    </div> */}

                    <div>
                        <h6 style={{ textAlign: 'center' }}><b>Education</b></h6>
                        <h6 style={{ textAlign: 'center' }}>{resumeDetails?.gradestartdate} - {resumeDetails?.graductionendday}</h6>
                        <h6 style={{ textAlign: 'center' }}><b>{resumeDetails?.degree} | {resumeDetails?.sclname}</b></h6>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GeneratePdf;