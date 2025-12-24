import { TabIndexes, cn } from "../utils";
import { IoMenu } from "react-icons/io5";
import { type FC, useRef, useEffect } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { useToast } from "../Context/Toast/ToastContext";
import { ThemeOptionsValidator, useTheme, type ThemeOptionsType } from "../Context/Theme/ThemeContext";

const Navbar: FC = () => {
  const { theme, applyTheme } = useTheme();
  const animatingRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const { open } = useToast();
  useEffect(() => {
    return () => {
      timersRef.current.forEach(id => clearTimeout(id));
      timersRef.current = [];
      animatingRef.current = false;
    };
  }, []);

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
          <a
            href={'#' + TabIndexes[0]}
            className="btn btn-primary btn-ghost text-xl hover:underline rounded-full"
            children="WebDude"
            onDoubleClick={() => {
              open('Theme Animation Started!', true, 2000, {
                toastVariant: 'alert-info',
                toastPosition: ["toast-start", "toast-bottom"]
              });

              if (animatingRef.current) return; // prevent overlap
              animatingRef.current = true;
              const appliedTheme = theme;
              ThemeOptionsValidator.options.forEach((item, index) => {
                const id = window.setTimeout(() => applyTheme(item), 1000 * (index + 1));
                timersRef.current.push(id);
              });

              const restoreId = window.setTimeout(() => {
                applyTheme(appliedTheme);
                animatingRef.current = false;
                open('Theme Animation Ended!', true, 5000, {
                  toastVariant: 'alert-success',
                  toastPosition: ["toast-start", "toast-bottom"]
                });
              }, 1000 * (ThemeOptionsValidator.options.length + 1));
              timersRef.current.push(restoreId);
            }}
          />
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
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-primary mb-1 hover:btn-accent"
              children={<MdOutlineColorLens size={24} />}
            />
            <ul tabIndex={-1} className="dropdown-content bg-base-300 rounded-2xl z-1 w-36 p-2 shadow-2xl max-h-[80dvh] overflow-y-scroll">
              {ThemeOptionsValidator.options.map((item, index) => (
                <li
                  key={index}
                  children={
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className={cn("theme-controller w-full btn btn-sm btn-block justify-start capitalize", theme === item ? "btn-primary" : "btn-ghost")}
                      aria-label={item}
                      value={item}
                      checked={theme === item}                // <-- controlled
                      onChange={({ target }) => {
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