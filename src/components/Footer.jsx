import { Insta, Gmail, Twitter, LinkedIn } from "../utils/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section>
      <footer className="dark:bg-gray-700 dark:text-gray-50">
        <div className="container flex justify-between p-4 m-0 md:p-8 lg:flex-row dark:divide-gray-400">
          <div className="py-6 space-y-4">
            <p className="text-lg font-semibold">Sachin 💖 Chauhan</p>
            <ul className="self-center  text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
              <li>Shop</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex gap-x-10">
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
