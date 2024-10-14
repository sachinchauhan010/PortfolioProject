import { Twitter, Gmail, LinkedIn, Insta } from "../utils/icons.jsx";
import contactImg from "../images/contactImg.png";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <div className="">
        <div className="sm:flex justify-start sm:justify-around items-center m-2 gap-x-20 rounded-lg p-5">
          <div>
            <p className="md:text-3xl xl:text-4xl text-2xl font-bold md:my-4 my-2">
              Get In Touch
            </p>
            <p className="md:text-2xl xl:text-3xl font-normal text-xxl text-primary">
              Have a Project in Your Mind
            </p>
            <button className="border-2 py-2 px-4 rounded my-5 hover:text-primary hover:border-primary w-fit md:mx-auto">
              <Link
                target="_blank"
                to={"/contact"}
              >Contact me</Link>
            </button>
            <div className="flex justify-start md:justify-start gap-x-10 flex-row text-primary py-5">
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
              <Link to="https://www.instagram.com/10_sach_in/" target="_blank">{Insta}</Link>
              <Link to="/contact">{Gmail}</Link>
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
