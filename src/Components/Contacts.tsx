import React from "react";
import { TabIndexes } from "../consts";
const Contacts: React.FC = () => {
  return (
    <React.Fragment >
      <div className="hero bg-base-200 min-h-[100dvh] scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[3]} data-aos="zoom-in-up" data-aos-delay='100'>
        {TabIndexes[3]}
      </div>
    </React.Fragment >
  );
}
export default Contacts; 