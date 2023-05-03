import React from "react";
import "./DashBoard03.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";

export default function DashBoard03() {
  return (
    <div>
      <Heder_nav />

      <div class="row">
        <div class="col-12 midleboxcolor">

        </div>

        <div class="col-10 offset-1 position_sert">

            <div class="row">
                <div class="col-3">
                    <div class="row">
                        <div class="tool_box widthmar">
                            <div class="row d-flex justify-content-center mt-5">
                                <img class="image_size" src="./images/CV.png" alt=""/>
                            </div>
                            <h4 class="mt-3 ms-3">Improve my resume</h4>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="tool_box widthmar">
                            <div class="row d-flex justify-content-center mt-5">
                                <img class="image_size" src="./images/Suitcase.png" alt=""/>
                            </div>
                            <h4 class="mt-3 ms-5">Search for jobs</h4>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="tool_box widthmar">
                            <div class="row d-flex justify-content-center mt-5">
                                <img class="image_size" src="./images/Interview.png" alt=""/>
                            </div>
                            <h4 class="mt-3 ms-3">I know the job I want</h4>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="tool_box">
                            <div class="row d-flex justify-content-center mt-5">
                                <img class="image_size" src="./images/Letter.png" alt=""/>
                            </div>
                            <h4 class="mt-3 ms-3">Create a cover letter</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 bg_color_blue">
            <div class="row mt-5">
                <div class="col-10 offset-1 quixbox">
                    <div class="row">
                        <div class="col-4" style={{ background: 'white' }}>
                            <div class="row d-flex justify-content-center">
                                <img class="mt-2" src="./images/a.png" alt="" style={{ width: '80%' }}/>
                            </div>
                            <div class="row mt-2 d-flex justify-content-center" style={{ border: '1px solid black' }}>
                                <div class="col-6">
                                    <h3>Haastrup Resume</h3>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="row">
                                        <div class="col-8">
                                            <h3 style={{ color: ' rgb(0, 255, 0)' }}>Strength</h3>
                                        </div>
                                        <div class="col-4 numberbo">
                                            <h4 style={{ color: 'white' }} class="mt-1 ms-1">70</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 d-flex justify-content-center" style={{ border: '1px solid black' }}>
                                    <h3 style={{ color: 'blue' }}>EDIT</h3>
                                </div>
                                <div class="col-6 d-flex justify-content-center" style={{ border: '1px solid black' }}>
                                    <h3 style={{ color: 'blue' }}>DELETE</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row mt-5 ms-3">
                                <h2>Quick fixes to a better resume</h2>
                                <h6>We found a few things that will improve your resume.</h6>
                            </div>
                            <div class="row ms-5 mt-5">
                                <div class="col-6">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2"></div>
                                        <div class="col-8">
                                            <h5>Completeness</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2"></div>
                                        <div class="col-8">
                                            <h5>Clear contact info</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2"></div>
                                        <div class="col-8">
                                            <h5>Measurable results</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2"></div>
                                        <div class="col-8">
                                            <h5>No typos</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2" style={{ color: 'white' }}></div>
                                        <div class="col-8">
                                            <h5>Formatting</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2"
                                             style={{ color: ' rgba(89, 154, 253, 0.52)' }}></div>
                                        <div class="col-8">
                                            <h5>Word choice</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                                        </div>
                                        <div class="col-8">
                                            <h5>Strong summary</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-4 boxbtrow mt-2" style={{ background: '#3AE15F' }}></div>
                                        <div class="col-8">
                                            <h5>Length</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row ms-1">
                                <div class="chart1 mt-2 ms-4">
                                    <img class="imgavarage" src="./images/avareg.png" alt=""/>
                                </div>
                            </div>
                            <div class="row mt-4 ms-1">
                                <div class="avaregBTN">
                                    <h6 style={{ color: 'white' }}>Resume strength</h6>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <div class="endBoxBTN">
                                    <h4 style={{ color: 'white' }}>FIX RESUME</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 ms-5">
                <div class="col-6 mt-5 mb-5">
                    <h3 class="ms-5" style={{ color: 'white' }}>My Resumes</h3>
                </div>
                <div class="col-6">
                    <div class="row ms-5">
                        <div class="underBTN">
                            <h5 style={{ color: 'white' }}>CREATE A NEW RESUME</h5>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="borderhe"/>

            <div class="row">
                <div class="align_cen col-12" style={{ color: 'white' }}>
                    <h5 class="me-5 ms-5">Haastrup</h5>
                    <h5 class="me-5 ms-5">Modified: 3/20/2023</h5>
                    <h5 class="me-5 ms-5">Created: 3/18/2023</h5>
                    <h5 class="me-1 ms-5">Strength</h5>
                    <div class="brderbox me-4">
                        <h6>70</h6>
                    </div>
                    <img class="me-5 ms-5 imgWithSEt" src="./images/check.png" alt=""/>
                    <img class="me-5 ms-5 imgWithSEt" src="./images/edit2.png" alt=""/>
                </div>
            </div>

            <hr class="borderhe"/>
        </div>
    </div>
      <Footer />
    </div>
  );
}
