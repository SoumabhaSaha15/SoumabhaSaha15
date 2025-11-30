import { type FC } from "react";
import { TabIndexes } from "../utils";
import { IoMenu } from "react-icons/io5";
import { MdOutlineColorLens } from "react-icons/md";
import { ThemeOptionsValidator, useTheme, type ThemeOptionsType } from "../Context/Theme/ThemeContext";

const Navbar: FC = () => {
  const { theme , applyTheme } = useTheme();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden btn-circle">
              <IoMenu className="text-accent" size={24} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {TabIndexes.map((item, index) => (<li key={index} children={<a href={`#${item}`} className="font-semibold link hover:underline rounded-full text-shadow-lg" children={item} />} />))}
            </ul>
          </div>
          <a href={'#' + TabIndexes[0]} className="btn btn-primary btn-ghost text-xl hover:underline rounded-full">WebDude</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            children={
              TabIndexes.map((item, index) => (<li key={index} children={
                <a
                  href={`#${item}`}
                  className="font-semibold link link-secondary hover:underline rounded-full text-shadow-xs hover:text-shadow-secondary"
                  children={item}
                />
              } />))
            }
          />
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle btn-primary mb-1 hover:btn-accent">
              <MdOutlineColorLens size={24} />
            </div>
            <ul tabIndex={-1} className="dropdown-content bg-base-300 rounded-2xl z-1 w-36 p-2 shadow-2xl max-h-[80dvh] overflow-y-scroll">
              {ThemeOptionsValidator.options.map((item, index) => (
                <li
                  key={index}
                  children={
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className={`theme-controller w-full btn btn-sm btn-block justify-start capitalize ${theme === item ? ("btn-primary") : ("btn-ghost")}`}
                      aria-label={item}
                      value={item}
                      onChange={({ target }) =>{
                        applyTheme(target.value as ThemeOptionsType);
                      }}
                    />
                  }
                />
              ))}
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}
export default Navbar;