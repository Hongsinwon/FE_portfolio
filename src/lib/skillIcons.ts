import type { StaticImageData } from "next/image";

import htmlIcon from "../../public/skill/html5.webp";
import cssIcon from "../../public/skill/css3.webp";
import jsIcon from "../../public/skill/javaScript.png";
import reactIcon from "../../public/skill/react.webp";
import nextIcon from "../../public/skill/next.webp";
import typescriptIcon from "../../public/skill/typescript.webp";
import dartIcon from "../../public/skill/dart.webp";
import flutterIcon from "../../public/skill/flutter.webp";
import gitIcon from "../../public/skill/git.png";
import githubIcon from "../../public/skill/github.webp";
import tailwindIcon from "../../public/skill/tailwind.webp";
import figmaIcon from "../../public/skill/figma.webp";
import photoshopIcon from "../../public/skill/photoshop.webp";
import illustratorIcon from "../../public/skill/illustrator.webp";
import adobeXdIcon from "../../public/skill/adobeXD.png";
import firebaseIcon from "../../public/skill/Firebase.png";
import supabaseIcon from "../../public/skill/supabase.png";

type SkillIcon = {
  src: StaticImageData;
  alt: string;
};

export const SKILL_ICONS: Record<string, SkillIcon> = {
  htmlIcon: { src: htmlIcon, alt: "HTML5" },
  cssIcon: { src: cssIcon, alt: "CSS3" },
  jsIcon: { src: jsIcon, alt: "JavaScript" },
  reactIcon: { src: reactIcon, alt: "React" },
  nextIcon: { src: nextIcon, alt: "Next.js" },
  typescriptIcon: { src: typescriptIcon, alt: "TypeScript" },
  dartIcon: { src: dartIcon, alt: "Dart" },
  flutterIcon: { src: flutterIcon, alt: "Flutter" },
  gitIcon: { src: gitIcon, alt: "Git" },
  githubIcon: { src: githubIcon, alt: "GitHub" },
  tailwindIcon: { src: tailwindIcon, alt: "Tailwind CSS" },
  figmaIcon: { src: figmaIcon, alt: "Figma" },
  photoshopIcon: { src: photoshopIcon, alt: "Photoshop" },
  illustratorIcon: { src: illustratorIcon, alt: "Illustrator" },
  adobeXdIcon: { src: adobeXdIcon, alt: "Adobe XD" },
  firebaseIcon: { src: firebaseIcon, alt: "Firebase" },
  supabaseIcon: { src: supabaseIcon, alt: "Supabase" },
};
