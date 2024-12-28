import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { Profile, Social } from "../app/types/components";

export const profile: Profile = {
  name: "Akhmadillo Mamirov",
  description: "Hi, I am Akhmad. Nice to meet you! I love building cool stuff. I enjoy coding, reading, music and sports.",
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