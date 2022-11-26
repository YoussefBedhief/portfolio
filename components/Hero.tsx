import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../utils/sanity"

type Props = {
  pageInfos: PageInfo
}

function Hero({ pageInfos }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfos.name}`,
      "An Engineering Student",
      "Interested in Blockchain developpement",
      "<Frontend devolopper />",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfos?.heroImage).url()}
        alt="Personnel-Photo"
        height={10}
        width={120}
        className="relative rounded-full mx-auto w-32 h-32 object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] transition-all hover:text-[#7451eb]/40 cursor-default">
          {pageInfos.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7451eb" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
