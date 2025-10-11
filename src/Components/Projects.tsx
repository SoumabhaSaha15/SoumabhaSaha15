import React from "react";
import { TabIndexes } from "../consts";
const Projects: React.FC = () => {
  return (
    <React.Fragment >
      <div className="hero bg-base-200 min-h-[100dvh]" id={TabIndexes[1]}>
        {TabIndexes[1]}
      </div>
    </React.Fragment >
  );
}
export default Projects; 