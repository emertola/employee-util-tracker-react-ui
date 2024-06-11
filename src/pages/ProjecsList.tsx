import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsList: FC = () => {
  const projectsData: { id: number; body: string; title: string }[] =
    (useLoaderData() as { id: number; body: string; title: string }[]) || [];

  if (!projectsData.length) {
    return <div>No records.</div>;
  }

  if (projectsData.length) {
    return (
      <>
        <ul>
          {projectsData.map((project) => (
            <li className="mb-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default ProjectsList;
