import { Social } from "../typings"
import { sanityClient } from "../utils/sanity"
import { SocialsQuery } from "./data"

export const fetchSocials = async () => {
  await sanityClient.fetch(SocialsQuery).then((data) => {
    const socials: Social[] = data.socials
    return socials
  })
}
