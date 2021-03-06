import { useEffect } from "react";

import OtherList from "../components/OtherList";

const Other = () => {

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = 'Other';
  }, []);

    return (
      <article className="Other">
        <div className="page-info">
          <h2 className="main-title">๐น๏ธ<span className="screen-out">Other</span></h2>
          <em className="main-description">๋น์์์ ์ผ๋ก ์งํํ ๊ฐ์ธ ํ๋ก์ ํธ ์๋๋ค. ํด๋ฆญ์ ํด๋น GitHub๋ก ์ฐ๊ฒฐ๋ฉ๋๋ค.</em>
        </div>

        <OtherList />
      </article>
    );
  };
  
  export default Other;