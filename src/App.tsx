import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Certifications from "./Components/Certifications";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Projects />
      <Certifications />
      <Contacts />
    </React.Fragment>
  )
}

export default App
