// types/projects.ts (Updated with more comprehensive types)
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  year: string;
  role: string;
  technologies: string[];
  live: string;
  github: string;
  featured?: boolean;
  stats?: {
    users?: string;
    outlets?: string;
    staff?: string;
    videos?: string;
    testimonials?: string;
    blogs?: string;
    endpoints?: string;
    components?: string;
    score?: string;
  };
}

export interface ProjectFilters {
  search?: string;
  technologies?: string[];
  year?: string;
  role?: string;
}

export interface ProjectSortOptions {
  field: 'year' | 'title' | 'role';
  direction: 'asc' | 'desc';
}