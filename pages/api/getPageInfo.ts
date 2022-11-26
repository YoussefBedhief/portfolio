import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { PageInfo } from "../../typings"
import { sanityClient } from "../../utils/sanity"

const query = groq`
*[_type== "pageInfo"]
`

type Data = {
  pageInfos: PageInfo[]
}

export default async function getPageInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfos: PageInfo[] = await sanityClient.fetch(query)

  res.status(200).json({ pageInfos })
}
