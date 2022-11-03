import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`As mentioned, I am a Junior Full-Stack Developer that has recently graduated from General Assembly's Software Engineering Immersive program. I have a university background of Commerce and Biomedical Science and love being involved in creative projects. I have experience in hospitality, retail and banking, but have always loved working with tech and I'm excited to see what I can achieve with software engineering. Enjoy browsing through and please reach out if you'd like to learn some more!`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Zuher Feki</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>24 years</th>
                  </tr>
                  <tr>
                    <th>City</th>
                    <th>Melbourne, AU</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">(+61) 411 639 583</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:zuher.feki17@gmail.com">
                        zuher.feki17@gmail.com
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>LinkedIn</th>
                    <th>
                      <a href="https://www.linkedin.com/in/zuherfeki/">Zuher Feki</a>
                    </th>
                  </tr>
                  <tr>
                    <th>GitHub</th>
                    <th>
                      <a href="https://github.com/zuh3r">zuh3r</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/Zuher Feki - Resume.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                  <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>National Australia Bank</h5>
                          <span>July 2022 - Present</span>
                        </div>
                        <h3>Software Engineer</h3>
                        <p>
                        - Developed a tool that allows users to find & link existing customer profiles, resulting in pre-filling details for the user<br/>
                        - Utilised unit tests to ensure functionality of all code additions and bug fixes<br/>
                        - Deploy code to non-prod environments for QE, and fortnightly to prod using Jenkins<br/>
                        - Monthly ECS & EC2 instance patching in line with company policy{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>National Australia Bank</h5>
                          <span>May 2021 - December 2021</span>
                        </div>
                        <h3>Direct Lending Advisor</h3>
                        <p>
                        - Consulted with customers in amending multimillion dollar home loan accounts resulting in considerable savings for customers <br/>
                        - Assessed unsecured loan applications up to $55,000 with tailored interest rates{" "}
                        </p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>G-STAR RAW</h5>
                          <span>August 2019 - June 2020</span>
                        </div>
                        <h3>
Assistant Manager & Visual Merchandiser</h3>
                        <p>
                        - Co-ordinated window displays and store layouts for Victorian Outlets leading to a 30% increase in accessory sales over the next month
                        <br/>
                        - Managed a team of over 10 staff members at the busiest Australian Outlet
                        {" "}
                        </p>
                      </div>
                    </li> */}
                    {/* <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Twitter LLC</h5>
                          <span>( 2016 — 2011 )</span>
                        </div>
                        <h3>Graphic Designer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li> */}
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>General Assembly</h5>
                          <span>2022</span>
                        </div>
                        <h3>Software Engineering Immersive</h3>
                        <p>
                          - 12 Week immersive bootcamp consisting of daily full-stack developing.
                          <br/>
                          - Completed 4 projects throughout the course using various different languages and frameworks.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Deakin University</h5>
                          <span>2016 - Present</span>
                        </div>
                        <h3>Bachelor of Commerce/Science</h3>
                        <p>
                          - Majors: Management Information Systems &amp; Human Biology
                          <br/>
                          - Impetus Academy x Bain and Company Case Competition - Grand Finalist (2020)
                          <br/>
                          - Deakin Software Engineering Club - Marketing Director (2021)
                          {" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>University of Liverpool, UK</h5>
                          <span>2019</span>
                        </div>
                        <h3>Semester Abroad</h3>
                        <p>
                          - Photography Scholarship ($2500)
                          {" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  {/* <div className="progress_item open" data-value={92}> */}
                    <div className="item_in">
                      <h3 className="progress_title">JavaScript, jQuery</h3>
                      {/* <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "92%" }} />
                      </div>
                    </div> */}
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">React JS</h3>
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">Node.JS, Express.JS</h3>
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">HTML, CSS, Bootstrap</h3>
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">Ruby, Ruby on Rails, Sinatra</h3>
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">MySQL, PostgreSQL</h3>
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">Git, GitHub</h3>
                  </div>
                  <div className="item_in">
                    <h3 className="progress_title">Microsoft Azure - Fundamentals Certified</h3>
                  </div>
                </div>
                {/* /Progress Bar */}
                {/* Description */}
                {/* <div className="resumo_fn_desc"> */}
                  
                {/* </div> */}
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
