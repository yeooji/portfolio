import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProjectListContext } from "../components/Content";

// TODO : 렌더링 최적화 필요, 새로고침 오류

const ProjectView = () => {
    const { id } = useParams();
    const projectList = useContext(ProjectListContext);
    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = 'ProjectView';
    }, []);

    useEffect(() => {
        if (projectList.length >= 1) {
          const targetProject = projectList.find(
            (it) => parseInt(it.id) === parseInt(id)
          );
    
          if (targetProject) {
            // 데이터가 존재할 때
            setData(targetProject);
          } else {
            // 데이터가 없을 때
            alert("없는 프로젝트 입니다.");
            navigate("/project", { replace: true });
          }
        }
      }, []);

      if (!data) {
        return <div className="DiaryPage">로딩중입니다...</div>; // ?
      }

      //console.log(data);

    return (
        <div className="ProjectView">
            <div className="project-img">
                <div className="title">
                    <em>{data.type}</em>
                    <h2>{data.title}</h2>
                </div>
            </div>

            <div className="project-info">
                <h3 className="title">{data.name}</h3>
                <em>{data.description}</em>
            </div>

            <div className="project-detail">
                <div>
                    <strong>참여구성</strong>
                    <p>{data.composition}</p>
                </div>

                <div>
                    <strong>참여율</strong>
                    <p>{data.participationRate}</p>
                </div>

                <div>
                    <strong>기술정보</strong>
                    <p>{data.technicalInfo}</p>
                </div>

                <div>
                    <strong>서비스링크</strong>
                    {
                        data.link === "" ? 
                        <a>-</a> : 
                        <a href={data.link} target="_blank" rel="noopener noreferrer">링크 바로가기</a>
                    }
                </div>
            </div>

            {/* TODO > 클래스 정리 */}
            <div className="aa">
                <Link to={'/project'} >
                    <span>&#xE000;</span> 뒤로가기
                </Link>
            </div>
            
        </div>
    );
};

export default ProjectView;