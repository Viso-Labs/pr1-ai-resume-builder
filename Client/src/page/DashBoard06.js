import React from "react";
import "./DashBoard06.css";
import Footer from "../components/Footer";
import Heder_nav from "../components/Heder_nav";
import Form from 'react-bootstrap/Form';

export default function DashBoard06() {
    return (
        <div>
            <Heder_nav />

            <div class="row bg_midle_box2">
                <div>
                    <div class="row">
                        <div class="col-md-4 col-12 mt-5">
                            <div className="mt-5">
                                <div class="WhiteBox mt-5 ms-5 me-5">
                                    <div class="row d-flex justify-content-center align-items-center">
                                        <div class="col-12 d-flex justify-content-center">
                                        <h4 class="mt-4" style={{ color: '#0560A4' }}>General Account Settings</h4>
                                        </div>
                                        <div class="col-12 mt-4 ms-4">
                              <h4 class="mt-3 ms-3">Subscription</h4>
                                        </div>
                                        <div class="col-12 mt-3 ms-4">
                                        <h4 class="mt-3 ms-3">Communication Preferences</h4>
                                        </div>
                                        <div class="col-12 mt-3 ms-4">
                                            <h4 class="mt-3 ms-3">Privacy Settings</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 col-12">

                            <div class="row mt-5 ms-2">
                                <div class="col-12 bg_darck_blue">
                                    <div className="row">
                                        <div className="align-middle col-6 d-flex">
                                            <h5 className="mt-5 color_white me-3 ms-3">Need help or want to change your subscription?</h5>
                                        </div>
                                        <div className="align-middle col-6 d-flex">
                                            <div className="mt-3 mb-3 vl"></div>
                                            <h5 className="mt-5 color_white me-3 ms-3">Contact us 7 days a week Monday-Friday: 8am to 8pm (Central), Saturday: 8am to 5pm (Central), Sunday: 10am to 6pm (Central)</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row mt-5 ms-2">
                                <h4 style={{ color: "#50E78C" }}>Communication Preferences</h4>
                            </div>
                            <div class="row mt-1 ms-2">
                                <h6 className="color_white">Select which emails you would like to receive:</h6>
                            </div>
                            <div class="row mt-4 ms-2">
                                <div class="col-1">
                                    <Form.Check
                                        className='with_set'
                                        type="checkbox"
                                        id={`default-checkbox`}
                                    />
                                </div>
                                <div class="col-6">
                                    <h5 class="tx_white">Insider Tips & Tricks</h5>
                                </div>
                            </div>
                            <div class="row mt-2 ms-2">
                                <div class="col-1">
                                    <Form.Check
                                        className='with_set'
                                        type="checkbox"
                                        id={`default-checkbox`}
                                    />
                                </div>
                                <div class="col-6">
                                    <h5 class="tx_white">Job Alerts</h5>
                                </div>
                            </div>
                            <div class="row mt-2 ms-2">
                                <div class="col-1">
                                    <Form.Check
                                        className='with_set'
                                        type="checkbox"
                                        id={`default-checkbox`}
                                    />
                                </div>
                                <div class="col-6">
                                    <h5 class="tx_white">New Features & Announcements</h5>
                                </div>
                            </div>
                            <div class="row mt-2 ms-2">
                                <div class="col-1">
                                    <Form.Check
                                        className='with_set'
                                        type="checkbox"
                                        id={`default-checkbox`}
                                    />
                                </div>
                                <div class="col-6">
                                    <h5 class="tx_white">Market Research</h5>
                                </div>
                            </div>
                            <div class="row mt-2 ms-2">
                                <div class="col-1">
                                    <Form.Check
                                        className='with_set'
                                        type="checkbox"
                                        id={`default-checkbox`}
                                    />
                                </div>
                                <div class="col-6">
                                    <h5 class="tx_white">Unsubscribe from all My IT emails</h5>
                                </div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-6 ms-2">
                                    {/* active = className="btn_active"
                                    disable = className="btn_block" */}
                                    <div className="mt-5 btn_save_chane me-5 btn_block">
                                        <h5 className="color_white">SAVE CHANGES</h5>
                                    </div>
                                </div>
                            </div>


                            <div class="row mt-4 ms-2">
                                <div className="col-12">
                                    <div className="row">
                                        <h4 className="tx_bold color_white">Privacy settings</h4>
                                    </div>
                                    <div className="row">
                                        <h6 className="color_white">Click on the type of cookies below to customize your experience on our site. You may freely give, refuse or withdraw your consent. Keep in mind that disabling cookies may affect your experience on the site. For more information please visit our Cookie Policy and Privacy Policy.</h6>
                                    </div>
                                </div>

                                <div class="row mt-5 ms-2">
                                    <div class="col-1">
                                        <Form.Check
                                            className='with_set'
                                            type="checkbox"
                                            id={`default-checkbox`}
                                        />
                                    </div>
                                    <div class="col-6">
                                        <h5 class="tx_white">Analytics</h5>
                                    </div>
                                </div>
                                <div class="row mt-2 ms-2">
                                    <div class="col-1">
                                        <Form.Check
                                            className='with_set'
                                            type="checkbox"
                                            id={`default-checkbox`}
                                        />
                                    </div>
                                    <div class="col-6">
                                        <h5 class="tx_white">Advertising</h5>
                                    </div>
                                </div>
                                <div class="row mt-2 ms-2">
                                    <div class="col-1">
                                        <Form.Check
                                            className='with_set'
                                            type="checkbox"
                                            id={`default-checkbox`}
                                        />
                                    </div>
                                    <div class="col-6">
                                        <h5 class="tx_white">Personalization</h5>
                                    </div>
                                </div>
                                <div class="row mt-2 ms-2">
                                    <div class="col-1">
                                        <Form.Check
                                            className='with_set'
                                            type="checkbox"
                                            id={`default-checkbox`}
                                        />
                                    </div>
                                    <div class="col-6">
                                        <h5 class="tx_white">Necessary</h5>
                                    </div>
                                </div>


                            </div>
                            <div class="row mt-2 mb-5">
                                <div class="col-6 ms-2">
                                    <div className="mt-5 btn_save_chane me-5 btn_active">
                                        <h5 className="color_white">SAVE CHANGES</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
