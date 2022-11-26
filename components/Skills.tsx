import { motion } from "framer-motion"
import SkillCard from "./SkillCard"
import { Skill } from "../typings"

type Props = {
  skills: Skill[]
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className=" absolute top-48 xl:top-[170px] grid grid-cols-4 md:grid-cols-5 gap-5 mt-5 overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7451eb]/50 ">
        {skills?.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
