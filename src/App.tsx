import { TabIndexes } from "./utils";
import Home from "./Components/Home";
import { SocialLinks } from "./utils";
import useRipple from "use-ripple-hook";
import ScrollReveal from "scrollreveal";
import Navbar from "./Components/Navbar";
import { FaGlobe } from "react-icons/fa";
import { type FC, useEffect } from "react";
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
      <div className="fab">
        <div
          tabIndex={0}
          role="button"
          ref={ripple}
          onPointerDown={event}
          className="btn btn-lg btn-circle btn-primary hover:btn-secondary"
        >
          <FaGlobe size={24} />
        </div>

        {SocialLinks.map((item) => (
          <a
            key={crypto.randomUUID()}
            role="div"
            href={item.link}
            className="link link-accent"
          >
            <div
              className="tooltip tooltip-left rounded-[100%]"
              data-tip={item.name}
            >
              <button
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
    </>
  )
}

export default App
