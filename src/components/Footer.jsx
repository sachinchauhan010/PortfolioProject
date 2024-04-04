import { Insta, Gmail, Twitter, LinkedIn } from "../utils/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section>
      <footer className="dark:bg-gray-700 dark:text-gray-50">
        <div className="container flex md:flex-row flex-col justify-between p-4 m-0 md:p-8 lg:flex-row dark:divide-gray-400">
          <div className="py-6 space-y-4">
            <p className="text-lg font-semibold">Sachin 💖 Chauhan</p>
            <ul className="self-center md:text-center text-start flex md:flex-row flex-col space-y-2">
              <Link to={"/about"}>About</Link>
              <Link to={"/resume"}>Resume</Link>
              <Link to={"/project"}>Projects</Link>
              <Link to={"/contact"}>Contact me</Link>
            </ul>
          </div>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center gap-x-10 flex-row ">
              <Link to="/">{Insta}</Link>
              <Link to="/">{Twitter}</Link>
              <Link to="/">{LinkedIn}</Link>
              <Link to="/">{Gmail}</Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;