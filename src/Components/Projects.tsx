import React from "react";
import { TabIndexes, type Project, Projects as ProjectList } from "../utils";
const ProjectPreview: React.FC<Project> = (props) => {
  return (
    <div className="card bg-base-100 image-full w-full max-h-full min-h-full shadow-sm transition-transform scale-95 hover:scale-100 hover:rotate-3 overflow-auto" >
      <figure>
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-outline hover:text-primary" children={props.name} />
        </h2>
        <p className="p-2">
          {props.description}
          <br />
          {props.skills.map((skill, index) => (<span key={index} className="badge hover:bg-accent hover:text-accent-content ml-1 mt-1" children={skill} />))}
        </p>
        <div className="card-actions justify-end">
          <a
            role="button"
            className="underline btn btn-secondary hover:btn-primary"
            href={props.url}
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
      children={ProjectList.map((item, index) => <ProjectPreview key={index} {...item} />)}
    />
  );
}
export default Projects; 