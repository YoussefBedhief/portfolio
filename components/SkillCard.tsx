import Image from "next/image"
import { motion } from "framer-motion"
import { Skill } from "../typings"
import { urlFor } from "../utils/sanity"

type Props = {
  directionLeft?: boolean
  skill: Skill
}

function SkillCard({ directionLeft, skill }: Props) {
  return (
    <div className="group relative cursor-pointer flex">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={urlFor(skill?.image).url()}
          alt={skill.title}
          width={100}
          height={100}
          className="rounded-full border border-gray-500 object-contain hover:object-scale-down w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <p className="flex justify-center items-center text-gray-500 text-sm">
          {skill.title}{" "}
        </p>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl text-black opacity-100 font-bold">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
