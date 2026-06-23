import style from "./skillContent.module.css";
import Image from "next/image";

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
import photoshopIcon from "../../public/skill/photoshop.png";
import illustratorIcon from "../../public/skill/illustrator.webp";
import adobeXdIcon from "../../public/skill/adobeXD.png";
import firebaseIcon from "../../public/skill/Firebase.png";
import supabaseIcon from "../../public/skill/supabase.png";

export default function SkillContent() {
  return (
    <div className={style.skillContent}>
      <b className={style.title}>SKILL</b>
      <div className={style.skillContainer}>
        <div className={style.skillItem}>
          <b>Frontend</b>
          <ul className={style.skillList}>
            <li>
              <Image src={htmlIcon} alt="html5" width={30} />
            </li>
            <li>
              <Image src={cssIcon} alt="css3" width={30} />
            </li>
            <li>
              <Image src={jsIcon} alt="javascript" width={30} />
            </li>
            <li>
              <Image src={reactIcon} alt="react" width={30} />
            </li>
            <li>
              <Image src={nextIcon} alt="next" width={30} />
            </li>
            <li>
              <Image src={typescriptIcon} alt="typescript" width={30} />
            </li>
            <li>
              <Image src={dartIcon} alt="git" width={30} />
            </li>
            <li>
              <Image src={flutterIcon} alt="github" width={30} />
            </li>
          </ul>
        </div>
        <div className={style.skillItem}>
          <b>Database</b>
          <ul className={style.skillList}>
            <li>
              <Image src={firebaseIcon} alt="Firebase" width={30} />
            </li>
            <li>
              <Image src={supabaseIcon} alt="Supabase" width={30} />
            </li>
          </ul>
        </div>
        <div className={style.skillItem}>
          <b>Tools</b>
          <ul className={style.skillList}>
            <li>
              <Image src={gitIcon} alt="github" width={30} />
            </li>
            <li>
              <Image src={githubIcon} alt="github" width={30} />
            </li>
            <li>
              <Image src={tailwindIcon} alt="Tailwind CSS" width={30} />
            </li>
            <li>
              <Image src={figmaIcon} alt="Figma" width={30} />
            </li>
            <li>
              <Image src={photoshopIcon} alt="Photoshop" width={30} />
            </li>
            <li>
              <Image src={illustratorIcon} alt="llustrator" width={30} />
            </li>
            <li>
              <Image src={adobeXdIcon} alt="Adobe XD" width={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
