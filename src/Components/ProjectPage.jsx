// pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="px-5 my-20 mb-16 md:my-32 md:px-16 font-switzer">
      <h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl ">{project.title}</h1>

      <div className="pb-10 mt-8 space-y-3 border-b md:mt-10 border-[#2a2a2a]">
        <p className="tracking-wide text-white/80">{project.techStack.join(", ")} </p>
        
        {project.url && (
        <button className="text-white">
            <a className="tracking-wide underline" href={project.url} target="_blank">
                Live Site
            </a>
        </button>
        )}
      </div>
      
      <div className="max-w-4xl">
        <p className="mt-6 leading-relaxed tracking-wide text-white">
            {project.description}
        </p>
      </div>

      {/* screenshots, tech stack, links, etc */}
    </section>
  );
}
