import {
  Home,
  FolderKanban,
  User,
  Newspaper,
  Mail,
  LucideWorkflow,
} from "lucide-react";
import { TbBrandSketchFilled } from "react-icons/tb";

export const NAV_LINKS = [
    {
    title: "About",
    href: "#about",
    icon: User,
    label: "About",
  },
    {
    title: "Experience",
    href: "/",
    icon: TbBrandSketchFilled,
    label: "Experience",
  },
  {
    title: "Projects",
    href: "#projects",
    icon: FolderKanban,
    label: "Projects",  
  },  
  //   {
  //   title: "Skills",
  //   href: "#skills",
  //   icon: LucideWorkflow,
  //   label: "Projects",  
  // },

  {
    title: "Blog",
    href: "#blog",
    icon: Newspaper,
    label: "Blog",
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Mail,
    label: "Contact",
  },
];