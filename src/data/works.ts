export type WorkDataModel = {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: string[];
};

export const worksData: WorkDataModel[] = [
  {
    id: 1,
    title: "Pass-checker",
    description:
      "Just added this because I want to fill this page. Even ChatGPT can do better.",
    link: "https://github.com/Eugene-CG/pass-checker",
    technologies: ["HTML", "JS", "CSS"],
  },
  {
    id: 2,
    title: "Password Generator",
    description:
      "Second little application. With this app, the user can generate a password.",
    link: "https://github.com/Eugene-CG/Password-Generator",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    title: "NoFriend-App",
    description:
      "My first published 'serious' project. CRUD app using the randomuser.me API.",
    link: "https://github.com/Eugene-CG/NoFriends-App",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    id: 4,
    title: "Memory Pair Game",
    description: "One of my first works. The name speaks for itself.",
    link: "https://github.com/Eugene-CG/Memory-Pair-Game",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    id: 5,
    title: "Catshop",
    description:
      "E-commerce site. Site where users can do e-commerce stuffs :D",
    link: "https://github.com/Eugene-CG/catshop",
    technologies: ["React", "Redux", "Tailwind CSS"],
  },
];
