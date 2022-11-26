import Head from "next/head"
import Link from "next/link"
import About from "../components/About"
import ContactMe from "../components/ContactMe"
import ExperienceSection from "../components/ExperienceSection"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline"
import { GetStaticProps } from "next"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSocials } from "../utils/fetchSocials"

type Props = {
  skills: Skill[]
  social: Social[]
  projects: Project[]
  pageInfos: PageInfo[]
  experiences: Experience[]
}

export default function Home({
  skills,
  social,
  projects,
  pageInfos,
  experiences,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7451eb]/50">
      <Head>
        <title>Youssef BEDHIEF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header */}
      <Header social={social} />
      {/*Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfos={pageInfos[0]} />
      </section>
      {/*About */}
      <section id="about" className="snap-center">
        <About pageInfos={pageInfos[0]} />
      </section>
      {/*ExperienceSection */}
      <section id="experience" className="snap-center">
        <ExperienceSection experiences={experiences} />
      </section>
      {/*Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/*Project */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/*Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfos={pageInfos[0]} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer flex justify-center items-center">
          <div className=" bg-[#7451eb] h-12 w-12 rounded-full filter grayscale hover:grayscale-0 transition-all">
            <ArrowSmallUpIcon className="font-bold h-12 w-12 rounded-full" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const social: Social[] = await fetchSocials()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const pageInfos: PageInfo[] = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()

  return {
    props: { skills, social, projects, pageInfos, experiences },
    // Next js will attempt to re-generate the page
    //- When a request comes in
    //- At most once every 60 seconds === 1 min
    revalidate: 60,
  }
}
