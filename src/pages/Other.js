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
          <h2 className="main-title">🕹️<span className="screen-out">Other</span></h2>
          <em className="main-description">비상업적으로 진행한 개인 프로젝트 입니다. 클릭시 해당 GitHub로 연결됩니다.</em>
        </div>

        <OtherList />
      </article>
    );
  };
  
  export default Other;