import { type FC } from "react";
import { HiExternalLink } from "react-icons/hi";
import { TabIndexes, type Project, Projects as ProjectList } from "../utils";

const ProjectPreview: FC<Project> = (props) => {
  return (
    <div className="card bg-base-100 image-full w-full max-h-full min-h-full shadow-sm transition-transform scale-95 hover:scale-100 hover:rotate-3 overflow-auto rounded-2xl" >
      <figure>
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-outline hover:text-primary rounded-full" children={props.name} />
        </h2>
        <p className="p-2">
          {props.description}
          <br />
          {props.skills.map((skill, index) => (<span key={index} className="badge hover:bg-accent hover:text-accent-content ml-1 mt-1 rounded-full" children={skill} />))}
        </p>
        <div className="card-actions justify-end">
          <a
            role="button"
            className="underline btn btn-secondary hover:btn-primary rounded-full"
            href={props.url}
            children={<>View <HiExternalLink size={20} /></>}
          />
        </div>
      </div>
    </div>
  )
}
const Projects: React.FC = () => {
  return (
    <>
      <div className="h-16 bg-base-200" id={TabIndexes[1]}></div>
      <div
        id={TabIndexes[1]+"content"}
        className="bg-base-200 px-4 min-h-[calc(100dvh-64px)] grid auto-rows-[50dvh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center place-items-center"
        children={ProjectList.map((item, index) => <ProjectPreview key={index} {...item} />)}
      />
    </>
  );
}
export default Projects; 