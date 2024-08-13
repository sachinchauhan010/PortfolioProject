import { Twitter, Gmail, LinkedIn } from "../utils/icons";
import contactImg from "../images/contactImg.png";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <div className="">
        <div className="md:flex justify-center items-center m-2 gap-x-20 rounded-lg text-center p-5">
          <div>
            <p className="md:text-3xl xl:text-4xl text-2xl font-bold md:my-4 my-2">
              Get In Touch
            </p>
            <p className="md:text-2xl xl:text-3xl font-bold text-xxl text-primary">
              Have a Project in Your Mind
            </p>

            <div className="flex md:justify-start md:items-center ms:flex-row flex-col gap-x-4 lg:gap-x-10 m-2">
              <button className="border-2 py-2 px-4 rounded my-5 hover:text-primary hover:border-primary">
                <Link
                  target="_blank"
                  to={"/contact"}
                >Download CV</Link>
              </button>
              <div className="flex justify-center space-x-6 mt-4 flex-wrap">
                <Link to={"https://x.com/SACHINC28888156?t=TsUIVfVpJrlF18rNhnrOSQ&s=09"} target="_blank" className="cursor-pointer">
                  {Twitter}
                </Link>
                <Link to={"010sssachin@gmail.com"} target="_blank" className="cursor-pointer">
                  {Gmail}
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/in/sachinchauhan010?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  } target="_blank"
                  className="cursor-pointer"
                >
                  {LinkedIn}
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={contactImg} alt="" className="m-auto md:m-2" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section2;
