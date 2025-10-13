import React from "react";
import { type Certificate, Certificates } from "../utils";
import { TabIndexes } from "../utils";
const CertificatePreview: React.FC<Certificate> = (prop: Certificate) => {
  return (
    <div
      className="card bg-base-100 image-full w-full max-h-full min-h-full shadow-sm scale-95 hover:scale-100 transition-transform" data-aos="zoom-in-up"
    >
      <figure>
        <img
          src={prop.preview}
          alt={prop.name}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2
          className="card-title"
          children={
            <div
              className='badge badge-neutral'
              children={prop.name}
            />
          }
        />
        <p className="p-2">{prop.description}</p>
        <div className="card-actions justify-end">
          <a
            href={prop.url}
            className="btn btn-accent hover:btn-primary"
            children="View"
          />
        </div>
      </div>
    </div>
  );
}

const Certifications: React.FC = () => {
  return (
    <div
      className="bg-base-200 px-4 min-h-[100dvh] grid auto-rows-[33.33dvh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center"
      id={TabIndexes[2]}
      data-aos="zoom-in-up"
      data-aos-delay='100'
      children={Certificates.map((item, index) => <CertificatePreview key={index} {...item} />)}
    />
  );
}

export default Certifications; 