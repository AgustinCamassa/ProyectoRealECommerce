import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import category from "../../data/category.json";
import logo from "../../assets/logo.svg";
import "./nav.css";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <nav className={`w-full z-[1] top-0 2xl:relative sticky`}>
      <div className="items-center justify-between bg-white px-0 py-4 xl:px-8 xl:flex">
        <div className="flex items-center justify-between px-4 xl:px-0">
          <div onClick={handleCloseMenu} className="xl:w-56 w-36">
            <img src={logo} alt="logo" />
          </div>
          <button onClick={handleClick} className="xl:hidden">
            {menu ? (
              <FontAwesomeIcon icon={faXmark} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div>
        <ul
          className={`absolute bg-white xl:bg-transparent w-full z-[-1] py-8 space-y-4 duration-500 ease-in
                                xl:space-y-0 xl:py-0 xl:z-0 xl:w-fit xl:static xl:flex xl:items-center xl:transition-none
                                ${menu ? "top-16" : "top-[-400px]"}`}
        >
          {category.map((data) => (
            <li className="ml-8" key={data.id}>
              <Link
                onClick={handleCloseMenu}
                className="link-inactive xl:text-p1 text-p2"
                to={`#${data.type}`}
                smooth
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
