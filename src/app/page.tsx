import SkillContent from "@/components/skillContent";
import ProjectItem from "../components/projectItem";
import style from "./page.module.css";
import projects from "@/mock/projects.json";

export default async function Home() {
  return (
    <section>
      <SkillContent />
      <div className={style.mainContent}>
        <b className={style.title}>PROJECT</b>
        {projects.map((book) => (
          <ProjectItem key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
