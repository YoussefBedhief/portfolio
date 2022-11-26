import Image from "next/image"
import { motion } from "framer-motion"
import { Project } from "../typings"
import { urlFor } from "../utils/sanity"
import { useEffect, useState } from "react"

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [activeProject, setActiveProject] = useState<Project[]>(projects)

  useEffect(() => {
    if (activeFilter === "All") {
      setActiveProject(projects)
    } else {
      setActiveProject(
        projects.filter((project) => project.tag.includes(activeFilter))
      )
    }
  }, [activeFilter, projects])

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row text-center 
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="absolute top-32 z-50 space-x-2">
        {["All", "Web 2.0", "Blockchain"].map((item) => (
          <button
            key={item}
            className={
              activeFilter === item ? "hero-button-active" : "hero-button"
            }
            onClick={() => {
              setActiveFilter(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className=" flex-cols absolute top-[75px] xl:top-[45px] w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7451eb]/80">
        {activeProject?.map((project, index) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src={urlFor(project?.image).url()}
                alt={project?.title}
                width={400}
                height={400}
              />
            </motion.div>
            <div className="flex justify-center items-center object-fill space-x-5">
              {project?.technologies?.map((technology) => (
                <Image
                  key={technology?._id}
                  src={urlFor(technology?.image).url()}
                  alt={technology?.title}
                  width={30}
                  height={30}
                />
              ))}
            </div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              className="space-y-2 md:space-y-5 px-0 md:px-10max-w-6xl"
            >
              <h4 className="text-2xl xl:text-3xl font-semibold text-center">
                <span className="underline decoration-[#7451eb]/50">
                  Project {index + 1} / {activeProject.length}:{" "}
                </span>
                <br />
                {project.title}
              </h4>
              <p className="text-sm text-center max-w-3xl">{project.summary}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#7451eb]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  )
}

export default Projects
