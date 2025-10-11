import React from "react";
import { TabIndexes } from "../consts";
const Contacts: React.FC = () => {
  return (
    <React.Fragment >
      <div className="hero bg-base-200 min-h-[100dvh]" id={TabIndexes[3]}>
        {TabIndexes[3]}
      </div>
    </React.Fragment >
  );
}
export default Contacts; 