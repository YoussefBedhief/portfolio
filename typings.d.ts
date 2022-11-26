interface sanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface PageInfo extends sanityBody {
  _type: "pageInfo"
  name: string
  address: string
  backgroundInfo: string
  email: string
  role: string
  heroImage: Image
  phoneNumber: string
  profilePic: Image
}

export interface Social extends sanityBody {
  _type: "social"
  title: string
  url: string
}
export interface Technology extends sanityBody {
  _type: "skill"
  title: string
  image: Image
  progress: number
}
export interface Skill extends sanityBody {
  _type: "skill"
  title: string
  image: Image
  progress: number
}
export interface Project extends sanityBody {
  _type: "project"
  title: string
  image: Image
  linkToBuild: string
  summary: string
  technologies: Technology[]
  tag: string[]
}
export interface Experience extends sanityBody {
  _type: "experience"
  campany: string
  companyImage: Image
  dateStarted: date
  dateEnded: date
  isCurrentlyWorking: boolean
  jobTitle: string
  point: string[]
  technologies: Technology[]
}
