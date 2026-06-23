"use client";

import Image from "next/image";
import style from "./profile.module.css";
import profile from "../../public/sinwon.jpeg";
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
            <p className={style.contactValue}>ghdtlsdnjs12@naver.com</p>
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

      <div className={style.introduction}>
        {/* TODO : 내용 수정 */}
        <div>
          <p className={style.infoTitle}>INTRODUCE</p>
          <p className={`${style.content} ${style.pcMode}`}>
            웹·앱 서비스 프론트엔드 개발을 중심으로 다양한 스타트업에서
            <br /> 제품과 서비스를 개발해왔습니다. 개발뿐 아니라 기획과
            디자인에도 <br />
            참여하며 서비스 전반을 이해하고 개선하는 경험을 쌓았습니다. <br />
            단순한 기능 구현을 넘어 사용자 경험과 서비스 방향성을 고민하며
            <br />
            문제 해결에 적극적으로 참여해왔습니다.
            <br />
            <br />
            앞으로는 프론트엔드 전문성을 강화하는 동시에
            <br />
            비즈니스와 사용자 관점을 함께 고려하는 개발자로 성장하고자 합니다.
          </p>
          <p className={`${style.content} ${style.tabletMode}`}>
            웹·앱 서비스 프론트엔드 개발을 중심으로 다양한 스타트업에서 제품과
            서비스를 개발해왔습니다. 개발뿐 아니라 기획과 디자인에도 참여하며
            서비스 전반을 이해하고 개선하는 경험을 쌓았습니다. 단순한 기능
            구현을 넘어 사용자 경험과 서비스 방향성을 고민하며 문제 해결에
            적극적으로 참여해왔습니다. 앞으로는 프론트엔드 전문성을 강화하는
            동시에 비즈니스와 사용자 관점을 함께 고려하는 개발자로 성장하고자
            합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
