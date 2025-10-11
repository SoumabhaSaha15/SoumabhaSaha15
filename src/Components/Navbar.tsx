import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeOptionsValidator, useTheme, type ThemeOptionsType } from "../Context/Theme/ThemeContext";
const TabIndexes = ["Home", "Projects", "Certifications", "Contact"];

const Navbar: React.FC = () => {
  const { theme, applyTheme } = useTheme();
  return (
    <React.Fragment >
      <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-full">
              <GiHamburgerMenu className="text-accent" size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {TabIndexes.map((item, index) => (<li key={index}><a href={`#${item}`}>{item}</a></li>))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">WebDude</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {TabIndexes.map((item, index) => (<li key={index}><a href={`#${item}`} className="font-semibold">{item}</a></li>))}
          </ul>
        </div>

        <div className="navbar-end">
          <select defaultValue={theme} className="select select-ghost w-30" onChange={({ target }) => applyTheme(target.value as ThemeOptionsType)}>
            {ThemeOptionsValidator.options.map((item, index) => (<option key={index} children={item} />))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;