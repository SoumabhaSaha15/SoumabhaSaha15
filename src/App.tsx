import AOS from "aos";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { FaGlobe } from "react-icons/fa";
import { SocialLinks } from "./utils";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Certifications from "./Components/Certifications";
const App: React.FC = () => {

  React.useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="min-h-screen overflow-y-auto">
        <Home />
        <Projects />
        <Certifications />
        <Contacts />
      </div>
      <div className="fab">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-primary"
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
                  children={<item.icon className="hover:btn-accent-content" size={24}/>}
                />
              </div>
            }
          />
        ))}
      </div>
    </React.Fragment>
  )
}

export default App
