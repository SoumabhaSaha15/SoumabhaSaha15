import React from "react";
import { TabIndexes, type Project, ProjectList } from "../utils";
const ProjectPreview: React.FC<Project> = (props) => {
  return (
    <div className="card bg-base-100 image-full w-full max-h-full min-h-full shadow-sm scale-95 hover:scale-100 transition-transform" data-aos="zoom-in-up">
      <figure>
        <img
          src={props.image}
          alt={props.name} 
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-neutral">
            {props.name}
          </div>
          </h2>
        <p className="p-2">{props.description}</p>
        <div className="card-actions justify-end">
          <a 
            role="button" 
            href={props.url} 
            className="btn btn-secondary hover:btn-primary"
            children={"View"}
          />
        </div>
      </div>
    </div>
  )
}
const Projects: React.FC = () => {
  return (
    <div
      className="bg-base-200 px-4 min-h-[100dvh] grid auto-rows-[50dvh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center place-items-center"
      id={TabIndexes[1]}
      data-aos="zoom-in-up"
      data-aos-delay='100'
      children={ProjectList.map((item, index) => <ProjectPreview key={index} {...item} />)}
    />
  );
}
export default Projects; 