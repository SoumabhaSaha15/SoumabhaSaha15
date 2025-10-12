import AOS from "aos";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
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
        {/* <section className="scroll-mt-16"> */}
          <Home />
        {/* </section> */}
        {/* <section className="scroll-mt-16"> */}
          <Projects />
        {/* </section> */}
        {/* <section className="scroll-mt-16"> */}
          <Certifications />
        {/* </section> */}
        {/* <section className="scroll-mt-16"> */}
          <Contacts />
        {/* </section> */}
      </div>
    </React.Fragment>
  )
}

export default App
