import { TabIndexes, cn } from "../utils";
import { IoMenu } from "react-icons/io5";
import { useRipple } from "use-ripple-hook";
import { type FC, useRef, useEffect } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { useToast } from "../context/toast/ToastContext";
import { ThemeOptionsValidator, useTheme, type ThemeOptionsType } from "../context/theme/ThemeContext";

const Navbar: FC = () => {
  const animatingRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const { theme, applyTheme } = useTheme();
  const { open } = useToast({ horizontal: 'toast-start' });
  const [ripple, event] = useRipple({ color: "currentColor" });

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
            <button
              type="button"
              tabIndex={0}
              className="btn btn-accent lg:hidden btn-circle"
              aria-label="Open navigation menu"
            >
              <IoMenu className="text-accent-content" size={24} />
            </button>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {TabIndexes.map((item, index) => (
                <li key={item}
                >
                  <a href={`#${item}`} className={cn("font-semibold link-hover hover:link-secondary link-primary hover:underline text-shadow-lg rounded-sm", index === 0 ? "rounded-t-box" : index === TabIndexes.length - 1 ? "rounded-b-box" : "")} >{item}</a>
                </li>

              ))}
            </ul>
          </div>
          <a
            href={'#' + TabIndexes[0]}
            className="btn btn-primary btn-ghost text-xl hover:underline rounded-full"
            onDoubleClick={() => {
              open('Theme Animation Started!', "alert-info", true, 2000);

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
                open('Theme Animation Ended!', 'alert-success', true, 5000);
              }, 1000 * (ThemeOptionsValidator.options.length + 1));
              timersRef.current.push(restoreId);
            }}
          >WebDude</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {TabIndexes.map(item => (
              <li key={item}  >
                <a
                  href={`#${item}`}
                  className="font-semibold link-hover hover:link-secondary link-primary rounded-box text-shadow-xs"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <button
              type="button"
              tabIndex={0}
              ref={ripple}
              onPointerDown={event}
              aria-label="Open theme picker"
              className="btn btn-circle btn-primary mb-1 hover:btn-accent"
            >
              <MdOutlineColorLens size={24} />
            </button>

            <ul tabIndex={-1} className="dropdown-content bg-base-300 rounded-box z-1 w-36 p-2 shadow-2xl max-h-[80dvh] overflow-y-scroll">
              {ThemeOptionsValidator.options.map((item, index) => (
                <li
                  className="mt-0.5"
                  key={item}
                >
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className={cn("theme-controller w-full btn btn-sm btn-block justify-start capitalize rounded-sm", theme === item ? "btn-primary" : "btn-ghost", index === 0 ? "rounded-t-box" : index === ThemeOptionsValidator.options.length - 1 ? "rounded-b-box" : "")}
                    aria-label={item}
                    value={item}
                    checked={theme === item}                // <-- controlled
                    onChange={({ target }) => applyTheme(target.value as ThemeOptionsType)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}
export default Navbar;