export interface Project {
  id: number;
  featured: boolean;
  project: string;
  title: string;
  subtitle: string;
  description: string;

  image: string;

  technologies: string[];

  github: string;
  live: string;

  year: string;
  role: string;

  color: string;
}
