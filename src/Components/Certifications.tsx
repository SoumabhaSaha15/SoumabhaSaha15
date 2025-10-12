import React from "react";
import { type Certificate, Certificates } from "./../consts";
import { TabIndexes } from "../consts";
const CertificatePreview: React.FC<Certificate> = (prop: Certificate) => {
  return (
    <React.Fragment>
      <div className="card bg-base-100 image-full w-96 shadow-sm scale-95 hover:scale-100 transition-transform">
        <figure>
          <img
            src={prop.preview}
            alt={prop.name}
            className="bg-base-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{prop.name}</h2>
          <p>{prop.description}</p>
          <div className="card-actions justify-end">
            <a href={prop.url} className="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const Certifications: React.FC = () => {
  return (
    <React.Fragment >
      <div className="bg-base-200 min-h-[100dvh] grid auto-rows-[33dvh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center" id={TabIndexes[2]} data-aos="zoom-in-up" data-aos-delay='100'>
        {Certificates.map((item,index) => <CertificatePreview key={index} {...item} />)}
      </div>
    </React.Fragment >
  );
}

export default Certifications; 