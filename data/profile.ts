import { faDochub, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { Profile, Social } from "../utils/types/components";

export const profile: Profile = {
  name: "Akhmadillo Mamirov",
  description: `Hi, I am Akhmad. Nice to meet you! I enjoy coding, reading, 
  music and sports. Currently, I am working on a scheduler to optimize utilization in multi-GPU systems for AI workloads. In my next role, I want to work on backend, distributed
  systems, compilers, AI, cloud and quantum computing projects.`,
  image: "/kauke.jpg",
}

export const socials: Social[] = [
  {
    name: "Github",
    link: "https://github.com/akhmadmamirov",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/akhmadillomamirov",
    icon: faLinkedin,
  },
]