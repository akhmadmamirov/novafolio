import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { Profile, Social } from "../app/types/components";

export const profile: Profile = {
  name: "Akhmadillo Mamirov",
  description: `Hi, I am Akhmad. Nice to meet you! I enjoy coding, reading, music and sports.
  Currently, I am doing my research in optimizing workload schedulling on Domain Specific Processing Units. 
  In my next role, I want to work on backend, distributed systems, compilers, AI, Cloud and Quantum Computing projects.`,
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