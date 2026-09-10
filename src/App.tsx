import Home from "@/components/Home";
import ScrollReveal from "scrollreveal";
import Navbar from "@/components/Navbar";
import { FaGlobe } from "react-icons/fa";
import { type FC, useEffect } from "react";
import { useRipple } from "use-ripple-hook";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import { TabIndexes, SocialLinks } from "@/utils";
import Certifications from "@/components/Certifications";

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
        <button
          type="button"
          tabIndex={0}
          ref={ripple}
          onPointerDown={event}
          aria-label="Open website and social links"
          className="btn btn-lg btn-circle btn-accent hover:btn-secondary"
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
    </>
  )
}

export default App
