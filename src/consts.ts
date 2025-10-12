export const TabIndexes: Array<string> = ["Home", "Projects", "Certifications", "Contacts"];
export type Certificate = {
  name: string;
  preview: string;
  url: string;
  description: string;
};
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
    description: `Artificial Intelligence concepts and processes, including common applications of AI, and generative AI. by IBM`,
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
    name: "MERN stack",
    description: `Mongodb Express.js and React.js expressapi in backend and React tailwind in frontend.`,
    preview: "./certificates/MERN.png",
    url: "https://www.dropbox.com/scl/fi/9u3i7ulqm1v4f6ux6vu3t/MERN.pdf?e=1"
  }
];