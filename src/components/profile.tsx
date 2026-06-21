"use client";

import Image from "next/image";
import style from "./profile.module.css";
import profile from "../../public/sinwon.jpeg";
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
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";

import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Profile() {
  const pathname = usePathname();

  return (
    <div
      className={`${style.profileSection} ${pathname === "/" ? "" : style.none}`}
    >
      <div className={style.aboutMe}>
        <p className={style.feContent}>Frontend Developer</p>
        <Image src={profile} alt="증명사진" width={140} />
        <div className={style.meInfo}>
          <b className={style.name}>홍 신 원</b>
          <p className={style.nameContent}>Hong Sin Won</p>
        </div>
        <div className={style.contactInfo}>
          <div className={style.contactContent}>
            <div className={style.contactTitle}>
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
              <span className={style.hide}>E-mail</span>
            </div>
            <p className={style.contactValue}>ghdtlsdnjs1234@gmail.com</p>
          </div>
          <div className={style.contactContent}>
            <div className={style.contactTitle}>
              <FontAwesomeIcon icon={faGithub} />
              <span className={style.hide}>Github</span>
            </div>
            <p className={style.contactValue}>
              <Link href={"https://github.com/Hongsinwon"} target="_blank">
                <span className={style.line}>
                  https://github.com/Hongsinwon
                </span>
              </Link>
            </p>
          </div>
          <div className={style.contactContent}>
            <div className={style.contactTitle}>
              <FontAwesomeIcon icon={faBlogger} />

              <span className={style.hide}>Blog</span>
            </div>
            <p className={style.contactValue}>
              <Link href={"https://sinwon-fe.tistory.com"} target="_blank">
                <span className={style.line}>
                  https://sinwon-fe.tistory.com
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* TODO : 메인 추가내용 */}
      {/* <div className={style.skill}>
        <div className={style.title}>SKILL</div>
        <div className={style.skillIcon}>
          <Image src={htmlIcon} alt="html5" width={30} />
          <Image src={cssIcon} alt="css3" width={30} />
          <Image src={jsIcon} alt="javascript" width={30} />
          <Image src={reactIcon} alt="react" width={30} />
          <Image src={nextIcon} alt="next" width={30} />
          <Image src={typescriptIcon} alt="typescript" width={30} />
          <Image src={dartIcon} alt="dart" width={30} />
          <Image src={flutterIcon} alt="flutter" width={30} />
          <Image src={gitIcon} alt="git" width={30} />
          <Image src={githubIcon} alt="githubIcon" width={30} />
        </div>
      </div> */}

      <div className={style.introduction}>
        {/* TODO : 내용 수정 */}
        <div>
          <p className={style.infoTitle}>Q. 내용 수정</p>
          <p className={style.content}>내용수정</p>
        </div>
      </div>
    </div>
  );
}
