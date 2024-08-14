import photo from "../images/image.png";
import { Link } from "react-router-dom";
import Divider from "../utils/Divider.jsx";
import { Twitter, Gmail, LinkedIn, Insta } from "../utils/icons.jsx";

const Section0 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-center gap-x-10 md:p-8 text-center relative box-border">
        <div className="flex flex-col items-start justify-start md:w-1/2 font-Roboto p-2 md:text-start">
          <p className="md:text-4xl xl:text-6xl text-3xl font-bold md:my-4 my-2">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-start">Hello, I'm</p>
            <p className="text-primary text-start ">Sachin Chauhan</p>
          </p>
          <p className="md:text-3xl xl:text-4xl font-bold text-2xl md:my-3 py-2 text-start">
            Full Stack Developer
          </p>
          <p className="md:text-lg text-base lg:text-xl font-normal flex flex-wrap text-start md:p-0">
            I'm a fullstack web developer and I have Problem Solving Skill. I have
            knowledge of Database also. It's my portfolio website. Here you will
            learn about my Journey.
          </p>
          <div className="flex justify-start gap-x-10 flex-row text-primary py-5">
            <Link
              to="https://x.com/SACHINC28888156?t=TsUIVfVpJrlF18rNhnrOSQ&s=09"
              target="_blank"
            >
              {Twitter}
            </Link>
            <Link
              to="https://www.linkedin.com/in/sachinchauhan010?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              {LinkedIn}
            </Link>
            <Link to="/">{Insta}</Link>
            <Link to="010sssachin@gmail.com" target="_blank">
              {Gmail}
            </Link>
          </div>

          <button className="border-2 py-2 px-4 rounded hover:text-primary hover:border-primary ">
            <Link
              target="_blank"
              to={"https://drive.google.com/file/d/1eDuEPyM8jUe9gxXzyBJX0v8ZNYvxkhHM/view?usp=sharing"}
            >Download CV</Link>
          </button>
        </div>

        <img
          src={photo}
          alt=""
          className="object-contain w-[350px] sm:ml-auto sm:mr-auto md:mx-10 p-2 m-6 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-primary"
        />

        {/* <p className="md:text-4xl xl:text-6xl font-bold text-slate-400 read-only font-Roboto absolute md:bottom-0 md:left-2 md:block hidden">
          SACHIN CHAUHAN
        </p> */}
      </div>
      <Divider />
    </div>
  );
};
export default Section0;
