import style from "./skillContent.module.css";

export default function SkillContent() {
  return (
    <div className={style.skillContent}>
      <b className={style.title}>SKILL</b>
      <div className={style.skillContainer}>
        <div className={style.skillItem}>
          <b>Frontend</b>
          <div className={style.skillList}></div>
        </div>
        <div className={style.skillItem}>
          <b>Database</b>
          <div className={style.skillList}></div>
        </div>
        <div className={style.skillItem}>
          <b>Tools</b>
          <div className={style.skillList}></div>
        </div>
      </div>
    </div>
  );
}
