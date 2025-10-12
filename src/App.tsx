import AOS from "aos";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { FaGlobe } from "react-icons/fa";
import { SocialLinks } from "./consts";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Certifications from "./Components/Certifications";
const App: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      mirror: true,
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
            role="button"
            href={item.link}
            className="btn btn-lg btn-secondary"
            children={
              <>
                <item.icon />
                {item.name}
              </>
            }
          />
        ))}
      </div>
    </React.Fragment>
  )
}

export default App
