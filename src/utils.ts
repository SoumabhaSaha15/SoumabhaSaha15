import { z } from "zod/v4";
import axios from "axios";
import { type IconType } from "react-icons";
import { SiGmail, SiLinktree } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const TabIndexes: Array<string> = ["Home", "Projects", "Certifications", "Contacts"];
export type Certificate = {
  name: string;
  preview: string;
  url: string;
  description: string;
};
export type SocialLinkType = {
  name: string;
  icon: IconType;
  link: string;
}
export const Certificates: Array<Certificate> = [
  {
    name: "C++",
    description: `
      Object-Oriented Data Structures in C++,
      an online non-credit course 
      authorized by University of Illinois 
      at Urbana-Champaign and offered through Coursera.
    `,
    preview: "./certificates/c++.png",
    url: "https://coursera.org/share/b3bf45f6d18478c9c3f16ecc467815b0"
  },
  {
    name: "Approximation Algorithm",
    description: `
      Approximation-algorithms,
      an online non-credit course 
      authorized by EIT Digital and offered through Coursera
    `,
    preview: "./certificates/approximationAlgorithm.png",
    url: "https://coursera.org/share/ab41014048dbda73c9b787f0333a25bb"
  },
  {
    name: "DJANGO",
    description: `Django The web framework for perfectionists with deadlines.`,
    preview: "./certificates/django.png",
    url: "https://www.dropbox.com/scl/fi/hg0dntu57npeauue5rjtf/django.pdf?e=1"
  },
  {
    name: "AI Credly,IBM",
    description: `
      Artificial Intelligence concepts and processes, 
      including common applications of AI, and generative AI. by IBM`,
    preview: "./certificates/gettingStartedWithArtificialIntelligenceBadge.png",
    url: "https://www.credly.com/badges/8f154844-1456-49eb-8d7a-85c9169ef58d/public_url"
  },
  {
    name: "Soft Computing Techniques",
    description: `NPTEL ONLINE CERTIFICATION (Funded by the MOE, Govt. of India) [Elite]`,
    preview: "./certificates/softComputing.png",
    url: "https://www.dropbox.com/scl/fi/wipw0b0t5g9hh7y5cb4fr/Soft-Computing-Techniques.pdf?e=1"
  },
  {
    name: "Gen AI",
    description: `Generative AI of 30 hours organized by Webel Fujisoft Vara Centre of Excellence in Industry`,
    preview: "./certificates/genAI.png",
    url: "https://www.dropbox.com/scl/fi/47nrsud8roxlx0rgej1i6/gen_ai.pdf?e=1"
  },
  {
    name: "MERN",
    description: `MERN stack internship certification by Euphoria-Genx`,
    preview: "./certificates/MERN.png",
    url: "https://www.dropbox.com/scl/fi/9u3i7ulqm1v4f6ux6vu3t/MERN.pdf?e=1"
  },
  {
    name: "MongoDb",
    description: `MongoDB certification by MTA learning pvt ltd.`,
    preview: "./certificates/mongoDb.png",
    url: "https://www.dropbox.com/scl/fi/9u3i7ulqm1v4f6ux6vu3t/MERN.pdf?e=1"
  }
];
export const SocialLinks: Array<SocialLinkType> = [
  {
    name: "Gmail",
    icon: SiGmail,
    link: "mailto:soumabhasaha1509+portfolio@gmail.com"
  }, {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/SoumabhaSaha15"
  }, {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/soumabha-saha-663816253"
  }, {
    name: "Linktree",
    icon: SiLinktree,
    link: "https://linktr.ee/Soumabha.Saha"
  },
];
export const ContactSchema = z.strictObject({
  Name: z.string({ error: "Name is required." })
    .min(4, { error: "Name must have 4 to 30 chars." })
    .max(30, { error: "Name can't exceed 30 chars." })
    .regex(/^[\x00-\x7F]*$/, { error: "Don't use non-ascii chars." }),
  Email: z.email({ error: "Email is required" })
    .regex(/^[\x00-\x7F]*$/, { error: "Don't use non-ascii chars." }),
  Message: z.string({ error: "Message is required." })
    .min(10, { error: "Message must have 10 to 100 chars." })
    .max(100, { error: "Message can't exceed 100 chars." })
});

export type ContactType = z.infer<typeof ContactSchema>;
export const contactFDT = ContactSchema.transform((data: ContactType) => {
  const formData = new FormData();
  Object.entries(data).forEach(([K, V]) => formData.append(K, V));
  return formData;
});

export const GoogleScript = axios.create({
  baseURL: '/gscript',
  validateStatus: (_) => true
});

export type Project = {
  name: string;
  image: string;
  url: string;
  skills: string[];
  description: string;
};
export const Projects: Array<Project> = [
  {
    name: "Hero Weather",
    image: "./projects/weather.png",
    url: "https://github.com/SoumabhaSaha15/HeroWeatherWebDude",
    skills: ["React", "Hero ui", "Tailwind", "Axios", "Zod"],
    description: `
      A simple react[vite] weather app that can access your location,
      and show weather by using Open-Weather API.
      Built using Tailwind[Hero-ui].
    `
  }, {
    name: "Code Editor",
    image: "./projects/code.png",
    url: "https://github.com/SoumabhaSaha15/CodeEditorWebDude",
    skills: ["React", "Flowbite", "Tailwind", "Sandpack"],
    description: `
      A simple react[vite] code editor built using sandpack[codesandbox] & flowbite-react[tailwind] you can use as a web playground.
    `
  }, {
    name: "Auto billing",
    image: "./projects/billing.png",
    url: "https://github.com/SoumabhaSaha15/AutoBilling",
    skills: ["React", "Flowbite", "Express.js", "MongoDB[atlas]", "Session", "CSRF"],
    description: `Generates invoice by scanning barcode, uses express-js, mongodb, sessions and react-flowbite & axios.`
  }
]; 