import type { Testimonial } from "../utils/types/components";

export const testimonials : Testimonial[] = [
  {
    id: 1,
    name: "Dr. Dan Palmer",
    role: "Professor at The College of Wooster",
    comment: `You have the exact right approach to your education, and that means
    that you are a great person to have in the classroom.`,
    category: "Professors",
    logo: "/wooster.jpeg"
  },
  {
    id: 2,
    name: "Faiaz Azmain",
    role: "CS student at The College of Wooster",
    comment: "You talk very passionately about technology. This makes others interested in it too.",
    category: "Peers",
    logo : "/wooster.jpeg"
  },
  {
    id: 3,
    name: "Qijun Feng",
    role: "Hiring Manager at EA",
    comment: "You are one of the best interns I had in my career. You are very fast at learning new things.",
    category: "Leadership",
    logo: "ea_logo2.png"
  },
  {
    id: 4,
    name: "John Herrick",
    role: "Software Engineer at Meta",
    comment: `I saw the drive and passion you have for technology from the first moment we spoke,
    and I have no doubt you are going to absolutely thrive in this industry.`,
    category: "Mentor",
    logo: "meta_logo.png"
  },
];