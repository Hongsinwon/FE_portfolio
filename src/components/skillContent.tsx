import style from "./skillContent.module.css";
import Image from "next/image";
import { SKILL_ICONS } from "../lib/skillIcons";

const FRONTEND_SKILLS = [
  "htmlIcon",
  "cssIcon",
  "jsIcon",
  "reactIcon",
  "nextIcon",
  "typescriptIcon",
  "dartIcon",
  "flutterIcon",
] as const;

const DATABASE_SKILLS = ["firebaseIcon", "supabaseIcon"] as const;

const TOOL_SKILLS = [
  "gitIcon",
  "githubIcon",
  "tailwindIcon",
  "figmaIcon",
  "photoshopIcon",
  "illustratorIcon",
  "adobeXdIcon",
] as const;

function SkillList({ skills }: { skills: readonly string[] }) {
  return (
    <ul className={style.skillList}>
      {skills.map((name) => {
        const icon = SKILL_ICONS[name];
        if (!icon) return null;

        return (
          <li key={name}>
            <Image src={icon.src} alt={icon.alt} width={30} />
          </li>
        );
      })}
    </ul>
  );
}

export default function SkillContent() {
  return (
    <div className={style.skillContent}>
      <b className={style.title}>SKILL</b>
      <div className={style.skillContainer}>
        <div className={style.skillItem}>
          <b>Frontend</b>
          <SkillList skills={FRONTEND_SKILLS} />
        </div>
        <div className={style.skillItem}>
          <b>Database</b>
          <SkillList skills={DATABASE_SKILLS} />
        </div>
        <div className={style.skillItem}>
          <b>Tools</b>
          <SkillList skills={TOOL_SKILLS} />
        </div>
      </div>
    </div>
  );
}
