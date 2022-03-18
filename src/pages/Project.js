import { useContext, useEffect } from "react";
import { ProjectListContext } from "../components/Content";

import ProjectList from "../components/ProjectList";

const Project = () => {

    const projectList = useContext(ProjectListContext);

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = 'Project';
      }, []);

    /* const checkActiveItem = () => {
        const listItem = document.querySelectorAll('.project-item');

        Array.prototype.forEach.call(listItem, listItem => {
            const scrollTop = document.documentElement.scrollTop;
            const minScroll = listItem.offsetTop - window.screen.availHeight;
            const maxScroll = listItem.offsetTop + listItem.clientHeight;
    
            if (scrollTop < minScroll) {
                if (!listItem.classList.contains('active')) {
                    return false;
                }
            } else if (scrollTop > maxScroll) {
                if (!listItem.classList.contains('active')) {
                    return false;
                }
            } else {
                if (!listItem.classList.contains('active')) {
                    listItem.classList.add('active');
                }
            }
    
        });
    }
    // TODO : 메뉴클릭시 스크롤해야 진행됨
    document.addEventListener("DOMContentLoaded", function(){
        checkActiveItem();
    });

    window.addEventListener('scroll', function() {
        checkActiveItem();
    }); */

    return (
        <article className="Project">
            
            <div className="page-info">
                <h2 className="main-title">💻<span className="screen-out">Project</span></h2>
                <em className="main-description">주요 프로젝트를 최신순으로 나열했습니다. 이미지 클릭시 디테일 뷰로 이동합니다.</em>
            </div>

            <ProjectList projectList={projectList} />
        </article>
    );
  };
  
  export default Project;