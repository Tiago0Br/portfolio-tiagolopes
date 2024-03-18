export interface Image {
    url: string
    alt: string
}

export interface Project {
    slug: string
    name: string
    image: Image
}

export interface Home {
    aboutMe: AboutMe
    projects: Project[]
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