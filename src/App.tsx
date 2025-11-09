// import AOS from "aos";
import { TabIndexes } from "./utils";
import ScrollReveal from "scrollreveal";
import { type FC, useEffect } from "react";
import Home from "./Components/Home";
import { SocialLinks } from "./utils";
import useRipple from "use-ripple-hook";
import Navbar from "./Components/Navbar";
import { FaGlobe } from "react-icons/fa";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Certifications from "./Components/Certifications";
const App: FC = () => {
  const [ripple, event] = useRipple();
  useEffect(() => TabIndexes.forEach((ids, index) => ScrollReveal().reveal(`#${ids}`, { delay: (index + 1) * 100, reset: true, easing: "ease-in-out" })), []);
  return (
    <>
      <Navbar />
      <div className="min-h-dvh overflow-y-auto">
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
          className="btn btn-lg btn-circle btn-accent"
          children={<FaGlobe size={24} />}
        />
        {SocialLinks.map((item, index) => (
          <a
            key={index}
            role="div"
            href={item.link}
            className="link link-accent"
            children={
              <div className="tooltip tooltip-left" data-tip={item.name}>
                <button
                  className="btn btn-lg btn-circle btn-secondary hover:btn-accent"
                  children={<item.icon className="hover:btn-accent-content" size={24} />}
                />
              </div>
            }
          />
        ))}
      </div>
    </>
  )
}

export default App
