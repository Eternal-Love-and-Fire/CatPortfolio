import { WorkCard } from "../components";

import { worksData } from "../data/works";

export const Works = () => {
  return (
    <div className="flex flex-1 flex-wrap justify-around">
      {worksData.map((project) => {
        return (
          <WorkCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            id={project.id}
          />
        );
      })}
    </div>
  );
};
