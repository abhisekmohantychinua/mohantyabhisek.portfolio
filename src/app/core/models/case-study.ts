export interface CaseStudy {
  title: string,
  description: string,
  detail: { title: string, body: string }[]
  tags: string[],
}
