import "./cover.css";
const FrameComponent = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-#fff">
        <div className="john-smith-parent">
      <b className="john-smith">John Smith</b>
      <div className="marketing-specialist">Marketing Specialist</div>
      <div className="flowerville-06012017">Flowerville, 06/01/2017</div>
      <div className="ms-katherine-bloomstein-container">
        <p className="ms-katherine-bloomstein">{`Ms. Katherine Bloomstein `}</p>
        {/* <p className="blank-line">&nbsp;</p> */}
        <p className="blank-line">Head of Marketing</p>
      </div>
      <div className="xyz-company-099-peony-container">
        <p className="xyz-company">XYZ Company</p>
        <p className="xyz-company">099 Peony Street Flowerville, Ohio 55675</p>
      </div>
      <div className="dear-katherine">Dear Katherine,</div>
      <div className="as-a-lifelong-container">
        <p className="xyz-company">
          As a lifelong enthusiast of XYZ's marketing initiatives, I was
          thrilled to see your posting for the position of Digital Marketing
          Manager. I am positive I can help with XYZ's upcoming challenges. I
          have experience with leading successful national online campaigns with
          budgets over $300,000. What is more, I have succeeded at expanding
          ABC's client base by 19% since 2011.
        </p> <></>
        <p className="xyz-company">
          In my current position at ABC, I have supervised all phases of our
          online marketing initiatives, both technical and creative. Last year,
          my key challenge was to design and optimize nine product websites for
          ABC's most strategic products and improve our SEO results as well as
          enhance the UX. Here we are a year later:
          <br/> • Eight of the nine
          websites I optimized have achieved and secured their spot in the top 3
          results on Google. These are organic, non-paid results for 10+ key
          search terms; <br/> • The incoming search engine traffic to all nine
          websites comprises 47% of the total organic traffic for key terms and
          phrases.
        </p> <></>
        <p className="xyz-company">
          I know that XYZ's current plans involve developing a comprehensive
          online portal focused on healthcare-related issues. This project is a
          perfect match for my personal and professional interests and an
          exciting opportunity to create a unique online base of knowledge for
          patients and healthcare professionals. I would love to leverage my
          knowledge of SEO marketing and online growth marketing to achieve
          groundbreaking results with this initiative.
        </p><br/>
        <p className="xyz-company">
          I would welcome the chance to discuss your digital marketing
          objectives and show you how my success at ABC can translate into
          digital and online marketing growth for XYZ.
        </p><br/>
        <p className="xyz-company">Kind regards, </p>
        
        <p>Jane Redlock</p>
        <p className="xyz-company">
          P.S. - I would also value the opportunity to show you how my
          e-detailing solutions grew the combined sales of three ABC flagship
          products by a record-breaking 13% in one year.
        </p>
      </div>
      <div className="personal-info-phone-container">
      <div class="flex items-center">
      <img class="w-10 h-auto ml-" src="./images/pngwing.com (6).png" alt="Image"/>
  <p class="xyz-company">
    <b class="personal-info1">  Personal Info</b>
  </p>
  
</div>


        
        <p className="xyz-company">
          <b className="personal-info1">&nbsp;</b>
        </p>
        <p className="xyz-company">
          <span className="phone1">Phone</span>
        </p>
        <p className="xyz-company">
          <span className="span"> 774-987-4009</span>
        </p>
        <p className="xyz-company">
          <span className="span">&nbsp;</span>
        </p>
        <p className="xyz-company">
          <span className="phone1">E-mail</span>
        </p>
        <p className="xyz-company">
          <span className="span"> john.smith@uptowork.com</span>
        </p>
      </div>
      <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent;
