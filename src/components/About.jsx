import { Link } from "react-router-dom";
import { Education } from "../utils/Data";

const About = () => {
  const downloadResume = () => {
    fetch("https://raw.githubusercontent.com/sachinchauhan010/PortfolioProject/sachin/src/images/myResume.png")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up the object URL
      })
      .catch((error) => {
        console.error("Error fetching the resume:", error);
      });
  };

  return (
    <div>
      <div className="md:py-10 bg-blue-100 box-border py-20">
        <button
          onClick={downloadResume}
          className="mx-auto sm:w-fit bg-gradient-to-r from-purple-500 rounded-md to-pink-500 px-4 py-2 my-3 md:my-8 text-lg font-semibold text-white hover:text-blue-900 text-center absolute md:top-20 md:right-10 right-[24%] top-20"
        >
          Download Resume
        </button>

        <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2 text-center">
          Education
        </p>
        <p className="flex-col justify-center md:items-center item-start md:mx-20 m-4">
          {Education.map((item) => (
            <div
              key={item.degree}
              className="w-full lg:w-2/3 m-auto my-5 shadow-lg shadow-orange-200 h-fit text-center p-4 text-fuchsia-600 bg-blue-50"
            >
              <p className="md:text-xl xl:text-2xl text-lg font-bold text-blue-900 text-center my-2">
                {item.degree}
              </p>
              <p className="md:text-lg text-base lg:text-xl font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                College : {item.college}
              </p>
              <p className="md:text-xl text-base lg:text-lg font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                Percentage/CGPA: {item.marks}
              </p>
              <p className="md:text-xl text-base lg:text-lg font-semibold flex flex-wrap text-center md:text-start px-10 md:p-0">
                Passing Year :{item.year}
              </p>
            </div>
          ))}
        </p>

        <div className="bg-fuchsia-100 p-3">
          <p className="md:text-3xl xl:text-4xl font-bold text-2xl text-gray-600 md:my-3 my-2 text-center">
            Skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-x-10 sm:p-10">
            <div className="h-32 md:w-[280px] w-full shadow-xl m-3 p-6 text-center bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-800 mb-2">
                Web Development
              </p>
              <Link
                to={"/project"}
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2"
              >
                See My Projects
              </Link>
            </div>
            <div className="h-32 md:w-[300px] w-full shadow-xl m-3 p-6 text-center bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-800 mb-2">
                Problem Solving
              </p>
              <Link
                to={"https://leetcode.com/010sachin/"}
                target="_blank"
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2"
              >
                LeetCode
              </Link>
              <Link
                to={"https://www.hackerrank.com/profile/010sssachin"}
                target="_blank"
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 hover:text-blue-700 hover:border-b-blue-600 border-b-2"
              >
                Hacker Rank
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
