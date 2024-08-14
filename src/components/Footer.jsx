import { Insta, Gmail, Twitter, LinkedIn } from "../utils/icons";
import { Link } from "react-router-dom";
import Divider from "../utils/Divider";
const Footer = () => {
  return (
    <section className="mt-4">
      <Divider/>
      <footer className="text-white">
        <div className="container flex md:flex-row flex-col justify-between p-4 m-0 md:p-8 lg:flex-row dark:divide-gray-400">
          <div className="py-6 space-y-4">
            <p className="text-lg font-semibold">Sachin 💖 Chauhan</p>
            <div className="self-center md:text-center text-start flex md:flex-row flex-col justify-center items-center space-y-2 md:gap-x-10">
              <Link to={"/"} className="hover:text-primary">Home</Link>
              <Link to={"/about"} className="hover:text-primary">About</Link>
              <Link to={"/project"} className="hover:text-primary">Projects</Link>
              <Link to={"/contact"} className="hover:text-primary">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center gap-x-10 flex-row text-primary">
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
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
