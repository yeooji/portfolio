const Home = () => {
    return (
      <article className="Home">
        <div className="page-info">
            <h2 className="main-title">🏡</h2>
        </div>
        
        <section className="experience">
          <div className="resume-info">
            <h3 className="title">Experience</h3>
          </div>

          <ul className="experience-list">
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
          </div>
          
          <div>
            <ul className="skill-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass(SCSS)</li>
              <li>JavaScript(ES6+)</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>CodeIgniter</li>
            </ul>
            <ul className="skill-list">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>XD</li>
            </ul>
          </div>

        </section>
      </article>
    );
  };
  
  export default Home;