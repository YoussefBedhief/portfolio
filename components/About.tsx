import Image from "next/image"
import { motion } from "framer-motion"
import photo from "../assets/Photo.jpg"
import { PageInfo } from "../typings"
import { urlFor } from "../utils/sanity"

type Props = {
  pageInfos: PageInfo
}

export default function About({ pageInfos }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 mb-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        className="mb-15 mt-10 md:mb-0 md:mt-0 flex-shrink-0 rounded-full object-cover md:rounded-lg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          src={urlFor(pageInfos?.profilePic).url()}
          alt="about-image"
          height={250}
          width={250}
          priority
          className="rounded-full md:rounded-lg mt-10 md:mt-0 h-52 w-44 md:h-95 md:w-65 xl:h-[350px] xl:w-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="space-y-5 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold text-center">
          Here is a little about{" "}
          <span className="underline decoration-[#7451eb]/50">who I am</span>
        </h4>
        <p className="text-base text-center">{pageInfos?.backgroundInfo}</p>
      </motion.div>
    </motion.div>
  )
}
