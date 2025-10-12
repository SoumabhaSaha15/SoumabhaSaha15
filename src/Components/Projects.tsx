import React from "react";
import { TabIndexes } from "../consts";
const Projects: React.FC = () => {
  return (
    <React.Fragment >
      <div className="bg-base-200 min-h-[100dvh] scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[1]} data-aos="zoom-in-up" data-aos-delay='100'>
        {TabIndexes[1]}
      </div>
    </React.Fragment >
  );
}
export default Projects; 