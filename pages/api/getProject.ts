import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { Project } from "../../typings"
import { sanityClient } from "../../utils/sanity"

const query = groq`
*[_type== "project"]{
  ...,
  technologies[]->
}
`

type Data = {
  projects: Project[]
}

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query)

  res.status(200).json({ projects })
}
