import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = 'Home';
  }, []);

  return (
    <article className="Home">
      <div className="page-info">
          <h2 className="main-title">🏡<span className="screen-out">Home</span></h2>
      </div>

      <section className="bio">
        <h2 className="title">안녕하세요.<br/><span className="bold-point">웹 프론트엔드 개발자, 최예지</span>입니다.</h2>
        <p className="explanation">
        3년의 마크업 개발과 1년의 프론트 개발 경험이 있으며, 비즈니스 마인드를 가지고 비즈니스에 기여하는 것을 즐거워 합니다.<br/>
        기술도 중요하지만 사용자가 원하는 것이 무엇인지 항상 고민하여 서비스에 적용하는 사람이 되고자 노력합니다.<br/>
        또한, 효율적인 웹 개발에 관심이 많아 새로운 기술에 대한 적극적인 관심이 있습니다.

        {/* 
        아름다운 인터페이스와 애니메이션을 구현하는 것을 좋아합니다.
        기술도 중요하지만 사용자가 원하는 것이 무엇인지 항상 고민하여 서비스에 적용하는 사람이 되고자 노력합니다.
        또한, 효율적인 웹 개발에 관심이 많아 새로운 기술에 대한 적극적인 관심이 있습니다.
        */}

        </p>
        <div className="link">
          <a href="mailto:yeooji_m@naver.com">yeooji_m@naver.com</a>
          <a href="https://github.com/yeooji" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
      
      <section className="experience">
        <div className="resume-info">
          <h3 className="title">Experience</h3>
        </div>

        <ul className="experience-list">
          <li className="experience-item">
            <div>
              <span className="company-name">Innored</span>
              <span className="working-period">2022. 4 - ing</span>
            </div>
            <div>
              <span className="position">Front-end web developer</span>
              <p className="work-details">디지털 광고 대행사 이노레드에서 디지털 캠페인 및 프로모션 제작과 사내 R&amp;D 프론트엔드 개발을 맡고있습니다.</p>
            </div>
          </li>

          <li className="experience-item">
            <div>
              <span className="company-name">Techvalue</span>
              <span className="working-period">2020. 8 - 2021. 10 (1yrs 3mos)</span>
            </div>
            <div>
              <span className="position">Front-end web developer</span>
              <p className="work-details">온라인 기술가치 평가 및 메타버스 가상 사무실 플랫폼을 제공하는 스타트업 테크밸류에서<br/>사내 프로젝트 웹 프론트 개발 및 사내 백오피스를 개발했습니다.</p>
            </div>
          </li>

          <li className="experience-item">
            <div>
              <span className="company-name">Matenetworks</span>
              <span className="working-period">2017. 4 - 2019. 11 (2yrs 8mos)</span>
            </div>
            <div>
              <span className="position">Web Designer &#38; Publisher</span>
              <p className="work-details">구글 마케팅 및 채팅 애플리케이션 개발 전문 기업 메이트네트웍스에서<br/>사내 및 계열사 웹/콘텐츠 디자인, 웹사이트 제작/유지 보수, 계열사 이벤트 기획 및 진행을 맡았습니다.</p>
            </div>
          </li>
        </ul>

      </section>

      <section className="skill">
        <div className="resume-info">
          <h3 className="title">Skills</h3>

          <div className="skill-level">
            <img src={process.env.PUBLIC_URL + `/assets/images/icon_question_mark.png`} width="13" alt='question mark' />

            <ul className="skill-level-item">
              <li className="level-3">실무 프로젝트 사용 경험이 있습니다.</li>
              <li className="level-2">개인 프로젝트 및 실습 경험이 있습니다.</li>
            </ul>
          </div>
        </div>
        
        <div>
          <ul className="skill-list">
            <li className="level-3">HTML5</li>
            <li className="level-3">CSS3</li>
            <li className="level-2">Sass(SCSS)</li>
            <li className="level-2">JavaScript</li>
            <li className="level-2">React.js</li>
            <li className="level-3">jQuery</li>
            <li className="level-3">Bootstrap</li>
            <li className="level-3">CodeIgniter</li>
            <li className="level-3">Laravel</li>
          </ul>
          <ul className="skill-list">
            <li className="level-3">Photoshop</li>
            <li className="level-3">Illustrator</li>
            <li className="level-3">XD</li>
            <li className="level-3">Figma</li>
            <li className="level-3">Zeplin</li>
          </ul>
        </div>
      </section>
    </article>
  );
};
  
  export default Home;