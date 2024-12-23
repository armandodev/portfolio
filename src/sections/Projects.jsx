import { useState, useCallback } from "react";
import Article from "../components/Article";
import Project from "../components/Project";
import projects from "../data/projects";
import { INITIAL_PROJECT_COUNT } from "../utils";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  const handleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  return (
    <Article articleId="projects" className="min-h-fit overflow-hidden">
      <section className="w-full grid gap-5 place-items-center">
        <h2 className="w-full text-3xl font-bold">{">"} Proyectos</h2>
        {
          <>
            <ul
              className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in animate-duration-300"
              role="list"
              aria-label="Lista de proyectos"
            >
              {visibleProjects.map((project) => (
                <Project project={project} key={project.id} />
              ))}
            </ul>
            {projects.length > INITIAL_PROJECT_COUNT && (
              <button
                className="flex items-center gap-2 text-lg"
                onClick={handleShowAll}
                aria-expanded={showAll}
                aria-controls="projects-list"
              >
                {showAll ? (
                  <>
                    Ocultar proyectos
                    <img
                      className="icon"
                      src="/icons/arrow-up.svg"
                      alt=""
                      aria-hidden="true"
                      width="24"
                      height="24"
                    />
                  </>
                ) : (
                  <>
                    Ver todos los proyectos ({projects.length})
                    <img
                      className="icon"
                      src="/icons/arrow-down.svg"
                      alt=""
                      aria-hidden="true"
                      width="24"
                      height="24"
                    />
                  </>
                )}
              </button>
            )}
          </>
        }
      </section>
    </Article>
  );
}
