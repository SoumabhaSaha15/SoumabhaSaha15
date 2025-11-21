import { type FC } from "react";
import { TabIndexes } from "../utils";
import { IoMenu } from "react-icons/io5";
import { ThemeOptionsValidator, useTheme, type ThemeOptionsType } from "../Context/Theme/ThemeContext";

const Navbar: FC = () => {
  const { theme, applyTheme } = useTheme();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden btn-circle">
              <IoMenu className="text-accent" size={24} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {TabIndexes.map((item, index) => (<li key={index} children={<a href={`#${item}`} className="font-semibold hover:underline rounded-full" children={item} />} />))}
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
                  className="font-semibold link link-accent hover:underline rounded-full"
                  children={item}
                />
              } />))
            }
          />
        </div>

        <div className="navbar-end">
          <select
            defaultValue={theme}
            className="select select-ghost w-30 rounded-full"
            onChange={({ target }) => applyTheme(target.value as ThemeOptionsType)}
            children={ThemeOptionsValidator.options.map((item, index) => (<option key={index} children={item} className="rounded-full" />))}
          />
        </div>
      </div>
    </>
  );
}
export default Navbar;