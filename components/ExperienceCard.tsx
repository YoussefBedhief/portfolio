import Image from "next/image"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "../utils/sanity"

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <Image
        src={urlFor(experience?.companyImage)?.url()}
        alt="logo"
        height={50}
        width={50}
        className="w-32 h-32 rounded-full xl:h-[150px] xl:w-[150px] object-contain object-center "
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle} </h4>
        <p className="font-bold text-2xl mt-1">{experience?.campany} </p>
        <motion.div className="flex space-x-2 my-2">
          {experience?.technologies.map((tech) => (
            <Image
              key={tech?._id}
              alt={tech?.title}
              src={urlFor(tech?.image).url()}
              width={35}
              height={30}
            />
          ))}
        </motion.div>
        <p className="uppercase py-5 text-gray-300">
          {experience?.dateStarted} -{" "}
          {experience?.isCurrentlyWorking ? "Present" : experience?.dateEnded}
        </p>
        <ul className="list-disc space-y-4 text-lg ml-5 h-40 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7451eb]/50">
          {experience?.point.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
