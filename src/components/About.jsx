import { Link } from "react-router-dom";
import { Education } from "../utils/Data";

const About = () => {

  return (
    <div>
      <div className="md:py-10 bg-gray-900 text-white box-border py-20">
        <p className="md:text-3xl xl:text-4xl font-semibold text-2xl md:my-3 my-2 text-center">
          Education
        </p>
        <Link
          target="_blank"
          to={"https://drive.google.com/file/d/1eDuEPyM8jUe9gxXzyBJX0v8ZNYvxkhHM/view?usp=sharing"}
          className="group mx-auto sm:w-fit px-4 py-2 my-3 md:my-8 text-lg font-normal text-center absolute md:top-20 md:right-10 right-[24%] top-20"
        >
          Download Resume
          <span className="absolute bottom-1 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
        </Link>
        <p className="flex flex-col justify-start md:items-center item-start md:mx-20 m-4">
          {Education.map((item) => (
            <div
              key={item.degree}
              className="w-full lg:w-2/3 my-5 shadow-lg h-fit p-4 border-2 rounded text-start flex flex-col justify-start"
            >
              <p className="md:text-xl xl:text-2xl text-lg font-semibold text-primary text-start my-2">
                {item.degree}
              </p>
              <p className="md:text-base text-sm xl:text-xl font-light flex flex-wrap">
                <span className="font-normal pr-4 text-primary">College : </span>{item.college}
              </p>
              <p className="md:text-base text-sm lg:text-lg xl:text-xl font-light flex flex-wrap text-wrap">
                <span className="font-normal pr-4 text-primary text-wrap">Marks : </span>{item.marks}
              </p>
              <p className="md:text-base text-sm lg:text-lg xl:text-xl font-light flex flex-wrap">
                <span className="font-normal pr-4 text-primary">Year : </span>{item.year}
              </p>
            </div>
          ))}
        </p>

        <div className="">
          <p className="md:text-3xl xl:text-4xl font-semibold text-2xl md:my-3 my-2 text-center">
            Skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-x-10 sm:p-10">
            <div className="h-32 md:w-[280px] w-full m-3 p-6 text-center border-2 rounded">
              <p className="text-2xl font-semibold text-primary mb-2">
                Web Development
              </p>
              <Link
                to={"/project"}
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 group relative"
              >
                See My Projects
                <span className="absolute -bottom-2 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
              </Link>
            </div>
            <div className="h-32 md:w-[300px] w-full border-2 rounded m-3 p-6 text-center">
              <p className="text-2xl font-bold text-primary mb-2">
                Problem Solving
              </p>
              <Link
                to={"https://leetcode.com/010sachin/"}
                target="_blank"
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 relative group"
              >
                LeetCode
                <span className="absolute -bottom-2 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
              </Link>
              <Link
                to={"https://www.hackerrank.com/profile/010sssachin"}
                target="_blank"
                className="md:text-lg text-base font-semibold text-center md:text-start px-4 relative group"
              >
                Hacker Rank
                <span className="absolute -bottom-2 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
