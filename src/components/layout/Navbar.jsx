import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

function Navbar({ title }) {
  return (
      <nav className="bg-neutral shadow-lg font-neutral">
      <div className="navbar container mx-auto flex justify-between">
        <div className="flex text-lg font-bold items-center justify-start">
          <FaGithub className="mr-2"></FaGithub>
          <Link to={"/"}>{title}</Link>
        </div>
        <div className="flex text-sm font-medium uppercase items-center justify-end ">
          <Link to={"/"} className={"btn btn-ghost btn-sm"}>
            home
          </Link>
          <Link to={"/about"} className="btn btn-ghost btn-sm">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
