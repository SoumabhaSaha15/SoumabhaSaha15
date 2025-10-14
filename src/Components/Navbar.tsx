import React from "react";
import { IoMenu } from "react-icons/io5";
import { ThemeOptionsValidator, useTheme, type ThemeOptionsType } from "../Context/Theme/ThemeContext";
import { TabIndexes } from "../utils";

const Navbar: React.FC = () => {
  const { theme, applyTheme } = useTheme();
  return (
    <React.Fragment >
      <div className="navbar bg-base-100/60 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden btn-circle">
              <IoMenu className="text-accent" size={24} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {TabIndexes.map((item, index) => (<li key={index} children={<a href={`#${item}`} className="font-semibold hover:underline" children={item} />} />))}
            </ul>
          </div>
          <a href={'#' + TabIndexes[0]} className="btn btn-primary btn-ghost text-xl">WebDude</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" children={TabIndexes.map((item, index) => (<li key={index} children={<a href={`#${item}`} className="font-semibold link link-accent hover:underline" children={item} />} />))} />
        </div>

        <div className="navbar-end">
          <select
            defaultValue={theme}
            className="select select-ghost w-30"
            onChange={({ target }) => applyTheme(target.value as ThemeOptionsType)}
            children={ThemeOptionsValidator.options.map((item, index) => (<option key={index} children={item} />))}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;