export interface Image {
  url: string
  alt: string
}

export interface Project {
  id: string
  name: string
  description: string
  image: Image
  techs: Tech[]
  links: Link[]
}

export interface Home {
  aboutMe: AboutMe
  projects: Project[]
  contacts: Contact[]
}

export interface AboutMe {
  title: Title
  description: string
  profile: Profile
  techs: Tech[]
}

export interface Title {
  default: string
  bold: string
}

export interface Tech {
  tech: string
  color: string
  bgcolor: string
}

export interface Profile {
  image: Image
  role: string
}

export interface Contact {
  name: string
  link: string
  isEmail?: boolean
}

export interface Link {
  title: string
  url: string
}
