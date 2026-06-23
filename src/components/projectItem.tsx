import Link from "next/link";
import style from "./projectItem.module.css";
import Image from "next/image";
import { ProjectData } from "../types";
import { SKILL_ICONS } from "../lib/skillIcons";

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
          {skill.map((name) => {
            const icon = SKILL_ICONS[name];
            if (!icon) return null;

            return (
              <li key={name}>
                <Image src={icon.src} alt={icon.alt} width={30} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
