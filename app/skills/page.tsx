import { brillant } from "../fonts";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

// Define the type for a skill item
interface Skill {
  name: string;
  icon: string;
  color: string;
}

// Define the type for a skill category
interface SkillCategory {
  category: string;
  skills: Skill[];
}

export default function skills() {
  // Define all skills with their icons
  const skillsData: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "orange",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "blue",
        },
        { name: "TailwindCSS", icon: "/images/tailwindcss.png", color: "sky" },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "purple",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "yellow",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "blue",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "cyan",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          color: "gray",
        },
        {
          name: "shadcn/ui",
          icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
          color: "violet",
        },
        { name: "DaisyUI", icon: "/images/daisyui.png", color: "green" },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "green",
        },
        { name: "Express.js", icon: "/images/expressjs.png", color: "gray" },
        { name: "Prisma", icon: "/images/prisma.png", color: "indigo" },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          color: "amber",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "blue",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "red",
        },
        { name: "GitHub", icon: "/images/github.png", color: "gray" },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "blue",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "purple",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          color: "orange",
        },
      ],
    },
    {
      category: "Skills",
      skills: [
        {
          name: "UI/UX Understanding",
          icon: "/images/uiux.png",
          color: "pink",
        },
        {
          name: "Responsive Design",
          icon: "/images/responsive-design.png",
          color: "teal",
        },
        { name: "API Integration", icon: "/images/api.png", color: "indigo" },
        { name: "Problem Solving", icon: "/images/idea.png", color: "amber" },
        {
          name: "Open Source",
          icon: "/images/open-source.png",
          color: "green",
        },
      ],
    },
    {
      category: "Engines",
      skills: [
        {
          name: "Godot",
          icon: "/images/godot.png",
          color: "blue",
        },
        {
          name: "Unity",
          icon: "/images/unity.png",
          color: "gray",
        },
      ],
    },
  ];

  // Function to render skill item with hover effects
  const SkillItem = ({ skill }: { skill: Skill }) => (
    <div className="flex flex-col items-center pt-5">
      <div className="relative group">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-14 h-14 mb-2 transition-transform duration-300 group-hover:scale-125 z-10 relative"
        />
        <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300 z-0 transform scale-90 group-hover:scale-125"></div>
      </div>
      <p className={`${oxanium.variable} font-semibold font-xl`}>
        {skill.name}
      </p>
    </div>
  );

  return (
    <div>
      <section
        className="min-h-screen bg-black bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/road.gif')",
        }}
      >
        <div className="p-8 rounded-xl">
          <h1
            className={`${brillant.className} text-3xl font-bold text-center`}
          >
            ✨ My Skill Set
          </h1>
          <p className="mt-4 text-xl flex justify-center">
            What I've learned, loved, and leveled up on the journey!
          </p>
          <p className="mt-4 text-xl flex justify-center">
            Scroll down to check out 👇
          </p>
        </div>
      </section>

      {skillsData.map((category) => (
        <div key={category.category} className="py-5 text-center">
          <h1 className={`${brillant.className} font-bold text-2xl mb-6`}>
            {category.category}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
            {category.skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
