import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer3 from "../components/Footer3";
import Heder_nav4 from "../components/Heder_nav4";
import "./SMMERYfinish3.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link,useNavigate } from "react-router-dom";

export default function SMMERYfinish3() {

  const navigate = useNavigate();
    
  const next_Finsh = () =>{

      sessionStorage.setItem("head6", true);
      navigate("/Finishted");
      
  }

  return (
    <div>
      <div>
        <Heder_nav4 />

        <div className="bg_list row">
          <div className="col-12">
            <div className="row">

              <div className="col-12 bg_white">
                <div className="row ms-2 me-2">
                  <div className="col-12">
                    <div className="row">
                      <div className="justify-start col-12 d-flex">
                        <h4 className="txblue_d">What are your affiliations?</h4>
                      </div>
                    </div>
                    <div className="row">

                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        wrapperStyle={{
                          marginLeft: 40,
                          width: '92%',
                          height: 650,
                          border: "1px solid black",
                        }}
                      />
                    </div>




                  </div>
                </div>
              </div>

              <div className="mt-5 mb-5 ms-4 me-4 row">
                <div className="justify-start col-6 d-flex">
                  <Link to="/SMMERYfinish2"><div className="backbtn">
                    <h4 className="mt-2">BACK</h4>
                  </div></Link>
                </div>
                <div className="justify-end col-6 d-flex">
                  <div className="nextbtn2text" onClick={next_Finsh}>
                    <h4 className="mt-2">NEXT: FINALIZE</h4>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <Footer3 />
      </div>
    </div>
  );
}
