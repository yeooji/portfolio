import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = 'Home';
  }, []);

  return (
    <article className="Home">
      <div className="page-info">
          <h2 className="main-title">π‘<span className="screen-out">Home</span></h2>
      </div>

      <section className="bio">
        <h2 className="title">μλνμΈμ.<br/><span className="bold-point">μΉ νλ‘ νΈμλ κ°λ°μ, μ΅μμ§</span>μλλ€.</h2>
        <p className="explanation">
        3λμ λ§ν¬μ κ°λ°κ³Ό 1λμ νλ‘ νΈ κ°λ° κ²½νμ΄ μμΌλ©°, λΉμ¦λμ€ λ§μΈλλ₯Ό κ°μ§κ³  λΉμ¦λμ€μ κΈ°μ¬νλ κ²μ μ¦κ±°μ ν©λλ€.<br/>
        κΈ°μ λ μ€μνμ§λ§ μ¬μ©μκ° μνλ κ²μ΄ λ¬΄μμΈμ§ ν­μ κ³ λ―Όνμ¬ μλΉμ€μ μ μ©νλ μ¬λμ΄ λκ³ μ λΈλ ₯ν©λλ€.<br/>
        λν, ν¨μ¨μ μΈ μΉ κ°λ°μ κ΄μ¬μ΄ λ§μ μλ‘μ΄ κΈ°μ μ λν μ κ·Ήμ μΈ κ΄μ¬μ΄ μμ΅λλ€.

        {/* 
        μλ¦λ€μ΄ μΈν°νμ΄μ€μ μ λλ©μ΄μμ κ΅¬ννλ κ²μ μ’μν©λλ€.
        κΈ°μ λ μ€μνμ§λ§ μ¬μ©μκ° μνλ κ²μ΄ λ¬΄μμΈμ§ ν­μ κ³ λ―Όνμ¬ μλΉμ€μ μ μ©νλ μ¬λμ΄ λκ³ μ λΈλ ₯ν©λλ€.
        λν, ν¨μ¨μ μΈ μΉ κ°λ°μ κ΄μ¬μ΄ λ§μ μλ‘μ΄ κΈ°μ μ λν μ κ·Ήμ μΈ κ΄μ¬μ΄ μμ΅λλ€.
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
              <p className="work-details">λμ§νΈ κ΄κ³  λνμ¬ μ΄λΈλ λμμ λμ§νΈ μΊ νμΈ λ° νλ‘λͺ¨μ μ μκ³Ό μ¬λ΄ R&amp;D νλ‘ νΈμλ κ°λ°μ λ§‘κ³ μμ΅λλ€.</p>
            </div>
          </li>

          <li className="experience-item">
            <div>
              <span className="company-name">Techvalue</span>
              <span className="working-period">2020. 8 - 2021. 10 (1yrs 3mos)</span>
            </div>
            <div>
              <span className="position">Front-end web developer</span>
              <p className="work-details">μ¨λΌμΈ κΈ°μ κ°μΉ νκ° λ° λ©νλ²μ€ κ°μ μ¬λ¬΄μ€ νλ«νΌμ μ κ³΅νλ μ€ννΈμ νν¬λ°Έλ₯μμ<br/>μ¬λ΄ νλ‘μ νΈ μΉ νλ‘ νΈ κ°λ° λ° μ¬λ΄ λ°±μ€νΌμ€λ₯Ό κ°λ°νμ΅λλ€.</p>
            </div>
          </li>

          <li className="experience-item">
            <div>
              <span className="company-name">Matenetworks</span>
              <span className="working-period">2017. 4 - 2019. 11 (2yrs 8mos)</span>
            </div>
            <div>
              <span className="position">Web Designer &#38; Publisher</span>
              <p className="work-details">κ΅¬κΈ λ§μΌν λ° μ±ν μ νλ¦¬μΌμ΄μ κ°λ° μ λ¬Έ κΈ°μ λ©μ΄νΈλ€νΈμμ€μμ<br/>μ¬λ΄ λ° κ³μ΄μ¬ μΉ/μ½νμΈ  λμμΈ, μΉμ¬μ΄νΈ μ μ/μ μ§ λ³΄μ, κ³μ΄μ¬ μ΄λ²€νΈ κΈ°ν λ° μ§νμ λ§‘μμ΅λλ€.</p>
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
              <li className="level-3">μ€λ¬΄ νλ‘μ νΈ μ¬μ© κ²½νμ΄ μμ΅λλ€.</li>
              <li className="level-2">κ°μΈ νλ‘μ νΈ λ° μ€μ΅ κ²½νμ΄ μμ΅λλ€.</li>
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
          </ul>
          <ul className="skill-list">
            <li className="level-3">Photoshop</li>
            <li className="level-3">Illustrator</li>
            <li className="level-3">XD</li>
          </ul>
        </div>
      </section>
    </article>
  );
};
  
  export default Home;