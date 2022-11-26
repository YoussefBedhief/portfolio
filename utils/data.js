import { groq } from "next-sanity"

export const SocialsQuery = groq`
*[_type== "socials"]
`
export const SkillsQuery = groq`
*[_type== "skill"]
`
export const ProjectsQuery = groq`
*[_type== "project"]{
  ...,
  technologies[]->
}
`
export const ExperiencesQuery = groq`
*[_type== "experience"]{
  ...,
  technologies[]->
}
`
export const pageInfoQuery = groq`
*[_type== "pageInfo"]
`
