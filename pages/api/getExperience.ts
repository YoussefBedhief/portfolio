import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { Experience } from "../../typings"
import { sanityClient } from "../../utils/sanity"

const query = groq`
*[_type== "experience"]{
  ...,
  technologies[]->
}
`

type Data = {
  experiences: Experience[]
}

export default async function getExperience(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query)

  res.status(200).json({ experiences })
}
