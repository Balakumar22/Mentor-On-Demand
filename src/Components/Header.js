import { Fragment } from "react";
import "../Styles/header.css";
import Icons from "../Images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <main id="content">
        <div className="content-top">
          <header>
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img src={Icons} alt="" width="50" height="40" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i class="fa-solid fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse nav-right"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item nav-right-con a-1">
                      <a
                        className="nav-link nav-hover"
                        aria-current="page"
                        href="#"
                      >
                        Find a Mentor{" "}
                        <i className="fa-solid fa-angle-down down"></i>
                      </a>
                      <div className="findmentor">
                        <div className="findmentor-left">
                          {/* Tech Mentor Section Start */}
                          <h3>Tech Mentor</h3>
                          <div className="tech-mentor">
                            <Link className="tech-text" to="/filter/javascript">
                              <p>Javascript Mentor</p>
                            </Link>
                            <a className="tech-text" href="#">
                              <p>Python Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Data Science Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Machine Learning Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Cyber Security Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Web Development Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>App Development Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p> Blockchain Mentor</p>
                            </a>
                          </div>
                          {/* Carrer Mentor Start  */}
                          <h3>Carrer Mentor</h3>
                          <div className="tech-mentor">
                            <a className="tech-text" href="#">
                              <p>LeaderShip Mentor</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Carrer Growth</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Interview Coaches</p>
                            </a>
                            <a className="tech-text" href="#">
                              <p>Resume Coaches</p>
                            </a>
                          </div>
                        </div>
                        {/* Business Mentor Start */}
                        <div className="business-mentor">
                          <h3>Business Mentor</h3>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Marketing Expert</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>CEO and Founder</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Product Managers</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Entrepreneurship</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Startup Mentors</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Growth Mentors</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Agile Mentors</p>
                          </a>

                          <a className="tech-text tech-text-right" href="#">
                            <p>Strategy Coaches</p>
                          </a>
                          {/* Design Mentor  */}
                          <h3>Design Mentor</h3>
                          <a className="tech-text tech-text-right" href="#">
                            <p>UX Design</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Product Design</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>Web Design</p>
                          </a>
                          <a className="tech-text tech-text-right" href="#">
                            <p>UX Reserch</p>
                          </a>
                        </div>
                        <div className="findmentor-right-last">
                          <h5>
                            <i className="fa-solid fa-user "></i>All Mentors
                          </h5>
                          <h5>
                            <i className="fa-brands fa-searchengin"></i>New
                            Mentors
                          </h5>
                          <h5>
                            <i className="fa-solid fa-chart-line"></i>Top
                            Mentors
                          </h5>
                          <h5>
                            <i className="fa-solid fa-phone"></i>Introductory
                            Call
                          </h5>
                          <h5>
                            <i className="fa-solid fa-hand"></i>Become a Mentor
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nav-right-con">
                      <a
                        className="nav-link nav-hover a"
                        aria-current="page"
                        href="#"
                      >
                        For a Businesses{" "}
                        <i className="fa-solid fa-angle-down down"></i>
                      </a>
                      <div className="findbusiness">
                        <h5>Mentorship for Teams</h5>
                        <h5>Information for Employers</h5>
                        <h5>Mentorship for Startups</h5>
                        <h5>Hire a Mentee</h5>
                        <h5>For School and Bootcamps</h5>
                      </div>
                    </li>
                    <li className="nav-item nav-right-con ">
                      <a
                        className="nav-link nav-hover"
                        aria-current="page"
                        href="#"
                      >
                        {" "}
                        Book a Session
                      </a>
                      <div className=""></div>
                    </li>
                    {/* <li className="nav-item">
                  <a className="nav-link nav-hover last" aria-current="page" href="#"> SignUp</a>
                </li> */}
                    <button
                      type="button"
                      className="btn btn-outline-primary nav-right-con b nav-btn"
                    >
                      SignUp
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success nav-right-con b nav-btn"
                    >
                      Login
                    </button>

                    {/* <li className="nav-item">
                  <a className="nav-link nav-hover last" aria-current="page" href="#"> Login</a>
                </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </main>
    </Fragment>
  );
};
export default Header;
