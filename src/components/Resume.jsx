import { Link } from "heroicons-react";
import { resumeLink } from "../utils/Data";
const Resume = () => {
  return (
    <>
      <div className="m-10">
        
        <div>
          <p className="md:text-xl lg:text-2xl text-lg font-semibold text-blue-800 text-center mb-10">
            Make a look on my Resume
          </p>
          <Link to={resumeLink} download>
            Download Resume
          </Link>
        </div>
        <img width={700} src={resumeLink} alt="" className="border-2 m-auto" />
      </div>
    </>
  );
};
export default Resume;
