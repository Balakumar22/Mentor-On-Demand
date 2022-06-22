import Typical from "react-typical";
import "../Styles/content.css";
const Content = () => {
  return (
    <div className="main-content">
      <div className="main-content-left">
        <h1 className="main-content-l">1- on -1</h1>
        <h1>
          <Typical
            loop={Infinity}
            steps={[
              "Javascript",
              1500,
              "Interview",
              1500,
              "Android ",
              1500,
              "Leadership",
              1500,
              "UI/UX",
              1500,
              "Blockchain",
              1500,
              "Marketing",
              1500,
              "Startup",
              1500,
            ]}
          />
        </h1>
        <h1 className="main-content-r">Mentorship</h1>
      </div>
      <div className="main-content-low">
        <p>
          Master your craft with leading mentors at your side. Grow with every
          online mentoring session and take the next step in your career. All on
          your terms, for a flat monthly price.
        </p>
      </div>
      <div className="button-Container">
        <div className="main-content-search">
          <div class="input-group mb-3 sear">
            <input
              type="text"
              class="form-control"
              placeholder="Try Marketing, Python, Aws"
              aria-label="Try Marketing,Python,Aws"
            />
            <button
              class="btn btn-outline-success but"
              type="button"
              id="button-addon2"
            >
              Find My Mentor
            </button>
          </div>
        </div>
        <div className="main-content-buttom">
          <div className="main-content-down">
            <span>Javascript Mentors</span>
            <span>Product Mentors</span>
            <span>Python Mentors</span>
            <span>Marketing Experts</span>
          </div>
          <div className="main-content-down-l">
            <span>UX Design Mentors</span>
            <span>Machine Learning Mentors</span>
            <span>Startup Mentors</span>
            <span>Branding Experts</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
