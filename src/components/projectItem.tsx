import Link from "next/link";
import style from "./projectItem.module.css";
import Image from "next/image";
import { ProjectData } from "../types";

import htmlIcon from "../../public/skill/html5.webp";
import cssIcon from "../../public/skill/css3.webp";
import jsIcon from "../../public/skill/JS.webp";
import reactIcon from "../../public/skill/react.webp";
import nextIcon from "../../public/skill/next.webp";
import typescriptIcon from "../../public/skill/typescript.webp";
import dartIcon from "../../public/skill/dart.webp";
import flutterIcon from "../../public/skill/flutter.webp";
import gitIcon from "../../public/skill/git.png";
import githubIcon from "../../public/skill/github.webp";

export default function ProjectItem({
  id,
  imageUrl,
  period,
  title,
  content,
  position,
  personnel,
  linkData,
  skill,
  info,
}: ProjectData) {
  return (
    <div className={style.projectItem} id={id.toString()}>
      <div className={style.itemImage}>
        <Image
          src={`${imageUrl}`}
          alt={`${title} 썸네일`}
          width={300}
          height={300}
        />
      </div>

      <div className={style.itemContent}>
        <p className={style.title}>{title}</p>
        <b className={style.content}>{content}</b>
        <p className={style.position}>
          {position}
          <span className={style.personnel}> · 작업자 {personnel}</span>
        </p>
        <p className={style.period}>{period}</p>
        <div className={style.link}>
          {linkData?.length &&
            linkData.map((data) => {
              return (
                <Link
                  href={
                    data.url === "onooff" || data.url === "mintonin"
                      ? `/${data.url}`
                      : data.url
                  }
                  key={data.text}
                  target={data.target ? "_blank" : "_self"}
                >
                  {data.text}
                </Link>
              );
            })}
        </div>
        <ul className={style.info}>
          {info?.length &&
            info.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
        </ul>
        <ul className={style.skill}>
          {skill.map((data) => {
            return <li key={data}>{data}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
