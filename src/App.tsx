import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  )
}

export default App
