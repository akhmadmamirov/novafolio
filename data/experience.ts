import type { Experience } from "../utils/types/components";
export const internshipExperiences: Experience[] = [
  {
    startDate: "05/2025",
    endDate: "08/2025",
    company: "Robinhood",
    title: "Software Engineer",
    description: `I built and shipped an AI-based role discovery system for AWS and Kubernetes
    under Security IAM, improving role-permission consistency with hash-based caching (18x faster processing)
    and reducing synchronization errors. I enhanced search relevance through algorithm refinements,
    progressive rollouts, and guardrails, while integrating OpenAI API, pgvector, and Braintrust to
    enable tracing, logging, and user feedback. I strengthened safety with prompt relevance checks
    to mitigate prompt injection risks and streamlined role allocation to cut overprivileged access and on-call overhead.`,
    team: "Security Identity and Access Management",
    location: "Menlo Park, CA",
    logoSrc: "/robinhood_logo.svg",
    logoAlt: "Robinhood Logo",
    images: ["/robinhood_interns.jpeg"],
    skills: ["Golang", "Typescript", "Kubernetes", "AWS"],
    type: "internship",
  },
  {
    startDate: "05/2024",
    endDate: "08/2024",
    company: "Electronic Arts",
    title: "Software Engineer",
    description: `
      I designed and built new, secure APIs for managing
      and troubleshooting player information for our developers and partners.
      I deployed this new platform with improved access control, auditing,
      and extensive depth-first search capabilities.`,
    team: "Commerce, Identity and Security",
    location: "Redwood City, CA",
    logoSrc: "/ea_logo.jpg",
    logoAlt: "EA Logo",
    images: ["/ea_sims.png", "/ea_group.png", "/ea_hq2.png", "/ea_hq.png"],
    skills: ["Java", "React", "Express", "AWS", "Docker"],
    type: "internship",
  },
  {
    startDate: "05/2023",
    endDate: "07/2023",
    company: "AtomRain Inc.",
    title: "Software Engineer",
    description: `I upgraded features in the Security, Payments, and Billing 
      components of the GraphGrid Connected Data Platform at AtomRain Inc.
      I reduced network latency by leading updates of Node.js and React across our codebase.
      Additionally, I refined UI components for Amazon EC2
      instance allocations and grid configurations.`,
    team: "Security, Payments and Billing",
    location: "Santa Monica, CA",
    logoSrc: "/atomrain_logo.jpeg",
    logoAlt: "Atomrain Logo",
    skills: ["JavaScript", "React", "Node.js", "Neo4j"],
    type: "internship",
  },
];

export const collegeExperiences: Experience[] = [
  {
    startDate: "08/2023",
    endDate: "Present",
    company: "Google Developer Group",
    title: "Founder & Lead",
    description: `I founded and lead a team of 8 students 
      to create the first CS club at our college in collaboration
      with Google Developer Group. I organized events, workshops
      and knowledge share sessions to help students learn about Google 
      technologies and prepare for early career opportunities.`,
    images: ["/google_io.png", "/google_io2.png"],
    location: "Wooster, OH",
    logoSrc: "/gdg_group.png",
    logoAlt: "Wooster Logo",
    skills: ["Flutter", "Firebase", "Google Cloud"],
    type: "college",
  },
  {
    startDate: "10/2023",
    endDate: "05/2024",
    title: "AI Research Assistant",
    description: `I worked on a research project to start a new course
      on Generative AI at Wooster with Dr. Palmer. I mentored a Non-stem
      student on how to use Generative AI tools to independently build a model to identify
      misspelled names in a vast dataset of passenger lists and crew manifests
      from the French Companys ships from 1700s.`,
    location: "Wooster, OH",
    logoSrc: "/wooster.jpeg",
    logoAlt: "Wooster Logo",
    skills: ["Python", "TensorFlow", "Langchain"],
    type: "college",
  },
];
