import React from 'react';
import './GeneratePdf.css'

function GeneratePdf(props) {
    return (
        <div class="book">
            <div class="page">
                <div class="subpage">
                    <div className='firstrow'>
                        <h5 style={{ fontWeight: 'bold' }}>KELLY BLACKWELL</h5>
                        <h5 style={{ fontWeight: 'bold' }}>ADMINISTRATIVE ASSISTANT</h5>
                    </div>
                    <hr />
                    <div className='secondrow'>
                        <h6 style={{ fontWeight: 'normal', fontSize: '12px' }}>(218) 254-1526</h6>
                        <h6 style={{ fontWeight: 'normal', fontSize: '12px' }}>kellyblackwell@gmail.com</h6>
                        <h6 style={{ fontWeight: 'normal', fontSize: '12px' }}>324 Blackwood Street, San Antonio, 78023</h6>
                    </div>
                    <hr />
                    <div className='about'>
                        Administrative Assistant with 7+ years of experience working directly for the CEO of Regions Financial, a Fortune 500 company. Possesses a Global MBA, impeccable written and verbal communication skills, and excellent interpersonal skills.
                    </div>

                    <div className='expereance'>
                        <h6 style={{ textAlign: 'center' }}><b>Expereance</b></h6>
                        <h6 style={{ textAlign: 'center' }}>Administrative Assistant, Aug 2012-Present</h6>
                        <h6 style={{ textAlign: 'center' }}><b>Regions Financial, Birmingham, AL </b></h6>

                        <div className='list-expereance'>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Streamline direct office services such as departmental finances, records, budget preparation, personnel issues, and housekeeping, vastly reducing wasted time and saving $150,000 per year.</li>
                                <li>Read and analyze incoming reports and memos to determine their importance and plan their distribution across a staff of 15. </li>
                                <li>Conduct in-depth research, compile data, and prepare papers for consideration in biannual reviews presented to high-level executives and governing committees.</li>
                                <li>Prepare daily memos, reports, invoices, financial statements, and other documents using word processing, database, spreadsheet, or presentation software.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='expereance'>
                        <h6 style={{ textAlign: 'center' }}><b>Expereance</b></h6>
                        <h6 style={{ textAlign: 'center' }}>Rehabilitation Counselor, Sep 2008-Jul 2012</h6>
                        <h6 style={{ textAlign: 'center' }}><b>Virginia Department of Social Services, Richmond, VA </b></h6>

                        <div className='list-expereance'>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li >Strategized with 200+ clients to help them achieve goals, choose rehabilitation programs plans, and develop a menu of options for accessing necessary social services.</li>
                                <li>Trained a team of 4 interns to prepare and maintain case files, documenting clients’ personal and eligibility information, services provided, narratives of clients’ contacts, and relevant correspondence.</li>
                                <li>Developed and maintained strong relationships with community referral sources, such as schools, churches, government resource centers, and local businesses.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='expereance'>
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
                    </div>

                    <div>
                        <h6 style={{ textAlign: 'center' }}><b>Education</b></h6>
                        <h6 style={{ textAlign: 'center' }}>sep - 14 current</h6>
                        <h6 style={{ textAlign: 'center' }}><b>msc | UNI name</b></h6>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GeneratePdf;