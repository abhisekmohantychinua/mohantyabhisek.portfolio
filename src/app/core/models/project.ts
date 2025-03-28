export interface Project {
  id: string,
  title: string,
  description: string[],
  technologies: string[],
  image: string,
  links?: { github?: string, visit?: string },
}
