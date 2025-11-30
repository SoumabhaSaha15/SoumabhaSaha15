import { type FC } from "react";
import { HiExternalLink } from "react-icons/hi";
import { type Certificate, Certificates, TabIndexes } from "../utils";
const CertificatePreview: FC<Certificate> = (prop: Certificate) => {
  return (
    <div className="card bg-base-100 image-full w-full max-h-full min-h-full shadow-sm scale-95 hover:scale-100 hover:rotate-3 transition-transform overflow-auto rounded-2xl">
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
              className='badge badge-outline hover:text-primary rounded-full'
              children={prop.name}
            />
          }
        />
        <p className="p-2">{prop.description}</p>
        <div className="card-actions justify-end">
          <a
            href={prop.url}
            className="btn btn-accent hover:btn-primary underline rounded-full"
            children={<>View <HiExternalLink size={20} /></>}
          />
        </div>
      </div>
    </div>
  );
}

const Certifications: React.FC = () => {
  return (
    <>
      <div className="h-16" id={TabIndexes[2]}></div>
      <div
        id={TabIndexes[2]+"content"}
        className="px-4 min-h-[calc(100dvh-64px)] grid auto-rows-[33.33dvh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center"
        children={Certificates.map((item, index) => <CertificatePreview key={index} {...item} />)}
      />
    </>
  );
}

export default Certifications; 