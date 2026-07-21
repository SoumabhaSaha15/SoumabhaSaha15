import { TabIndexes } from "./utils";
import Home from "./Components/Home";
import { SocialLinks } from "./utils";
import ScrollReveal from "scrollreveal";
import Navbar from "./Components/Navbar";
import { FaGlobe } from "react-icons/fa";
import { type FC, useEffect } from "react";
import { useRipple } from "use-ripple-hook";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Certifications from "./Components/Certifications";

const App: FC = () => {
  const [ripple, event] = useRipple({ color: "currentColor" });

  useEffect(() => TabIndexes.forEach((ids, index) => ScrollReveal().reveal(`#${ids}content`, { delay: (index + 1) * 100, reset: true, easing: "ease-in-out" })), []);
  return (
    <>
      <Navbar />
      <div className="min-h-dvh bg-transparent overflow-y-auto">
        <Home />
        <Projects />
        <Certifications />
        <Contacts />
      </div>
      {/* <div className="hover:aura text-base-content rounded-full inline-block"> */}
      <div className="fab">
        <button
          type="button"
          tabIndex={0}
          ref={ripple}
          onPointerDown={event}
          aria-label="Open website and social links"
          className="btn btn-lg btn-circle btn-primary hover:btn-secondary"
        >
          <FaGlobe size={24} />
        </button>

        {SocialLinks.map((item) => (
          <a
            key={item.link}
            // role="div"
            href={item.link}
            className="link link-accent"
          >
            <div
              className="tooltip tooltip-left rounded-full"
              data-tip={item.name}
            >
              <button
                type="button"
                aria-label={item.name}
                className="btn btn-lg btn-circle btn-primary hover:btn-secondary"
              >
                <item.icon
                  className="hover:btn-accent-content"
                  size={24}
                />
              </button>
            </div>
          </a>
        ))}
      </div>
      {/* </div> */}
    </>
  )
}

export default App
