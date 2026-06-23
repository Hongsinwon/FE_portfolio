import { ProjectData } from "@/types";
import Image from "next/image";
import style from "./detailTopInfo.module.css";
import itemStyle from "./projectItem.module.css";
import { SKILL_ICONS } from "@/lib/skillIcons";

export default function DetailTopInfo({
  id,
  imageUrl,
  period,
  title,
  content,
  position,
  personnel,
  skill,
}: ProjectData) {
  return (
    <div className={style.detailTopInfo} id={id.toString()}>
      <div className={style.itemContent}>
        <div>
          <p className={itemStyle.title}>{title}</p>
          <b className={itemStyle.content}>{content}</b>
          <p className={itemStyle.position}>
            {position}
            <span className={itemStyle.personnel}> · 작업자 {personnel}</span>
          </p>

          <p className={itemStyle.period}>{period}</p>
        </div>
        <ul className={style.skill}>
          {skill.map((name) => {
            const icon = SKILL_ICONS[name];
            if (!icon) return null;

            return (
              <li key={name}>
                <Image src={icon.src} alt={icon.alt} width={35} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.itemImage}>
        <Image
          src={`${imageUrl}`}
          alt={`${title} 썸네일`}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
