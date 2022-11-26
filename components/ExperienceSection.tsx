import { motion } from "framer-motion"
import { Experience } from "../typings"
import ExperienceCard from "./ExperienceCard"

type Props = {
  experiences: Experience[]
}

function ExperienceSection({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row text-left 
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        EXPERIENCES
      </h3>
      <div className=" absolute top-[100px] w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7451eb]/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default ExperienceSection
