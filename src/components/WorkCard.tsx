import { Link } from "react-router-dom";

import { WorkDataModel } from "../data/works";

export const WorkCard: React.FC<WorkDataModel> = ({
  title,
  description,
  technologies,
  id,
  link,
}) => {
  return (
    <div
      meta-id={id}
      className="bg-black w-full sm:min-w-96 rounded-lg shadow-md p-6 m-4 flex-1 flex flex-col justify-between border-2 border-white hover:bg-gray-900 duration-300"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-300">{title}</h2>
      <p className="text-lg text-gray-500 mb-4">{description}</p>
      <div className="flex items-center flex-wrap gap-4">
        <div className="flex items-center gap-2 text-gray-400">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-500 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <Link
          to={link}
          target="_blank"
          className="ml-auto bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-blue-900 focus:outline-none border-2 duration-300 border-white"
        >
          Link to Git
        </Link>
      </div>
    </div>
  );
};
