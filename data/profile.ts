import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { Profile, Social } from "../utils/types/components";

export const profile: Profile = {
  name: "Akhmadillo Mamirov",
  description: `Hi, I am Akhmad. Nice to meet you! I enjoy coding, reading, 
  music and sports. Currently, I am doing my research in optimizing workload
  schedulling on DPUs. In my next role, I want to work on backend, distributed
  systems, compilers, AI, cloud and quantum computing projects.`,
  image: "/profile.png",
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