import { Link } from "react-router-dom";

const Project = () => {
    return (
        <article className="Project">
            <div className="page-info">
                <h2 className="main-title">Project</h2>
                <em className="main-description">주요 프로젝트를 오름차순으로 나열했습니다.</em>
            </div>

            <section className="group">
                <div className="group-title">
                    <h3 className="title">테크밸류</h3>
                </div>

                <ul className="project-list">
                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">온타운</h3>
                            <p className="period">2021년 7월 - 2021년 9월</p>
                            <p className="explan">메타버스 가상사무실 및 기업 커뮤니티 제공 플랫폼</p>
                            <ul className="performance">
                                <li>회원가입 기능 개발</li>
                                <li>계정 정보 변경 기능 개발</li>
                                <li>기업 등록 및 검색 기능 개발</li>
                                <li>게시물 생성/수정/삭제 기능 개발</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>CodeIngniter</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">IR Canvas</h3>
                            <p className="period">2021년 4월 - 2021년 7월</p>
                            <p className="explan">스타트업 대상 온라인 비대면 사업계획서 작성 및 코칭 플랫폼</p>
                            <ul className="performance">
                                <li>작성중</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>CodeIngniter</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">한국 스타트업 투자정보</h3>
                            <p className="period">2020년 9월 - 2021년 3월</p>
                            <p className="explan">스타트업 대상 투자가치산출 및 투자 정보 제공 플랫폼</p>
                            <ul className="performance">
                                <li>작성중</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>CodeIngniter</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">사내 백오피스</h3>
                            <p className="period">-</p>
                            <p className="explan">테크밸류에서 제공하는 웹 서비스의 데이터 관리 사이트</p>
                            <ul className="performance">
                                <li>작성중</li>
                            </ul>
                            <ul className="tool">
                                <li>Bootstrap</li>
                                <li>CodeIngniter</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>
                </ul>
            </section>

            <section className="group">
                <div className="group-title">
                    <h3 className="title">메이트네트웍스</h3>
                </div>

                <ul className="project-list">
                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">제이휴</h3>
                            <p className="period">2019년 7월 - 2019년 9월</p>
                            <p className="explan">해외 고객과 국내 성형외과 매칭 기업 사이트</p>
                            <ul className="performance">
                                <li>작성중</li>
                            </ul>
                            <ul className="tool">
                                <li>작성중</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">메이트엠박스</h3>
                            <p className="period">2018년 4월 - 2018년 7월</p>
                            <p className="explan">영상 녹음 스튜디오 노래방 서비스를 제공하는 메이트엠박스의 가맹 정보 제공 사이트</p>
                            <ul className="performance">
                                <li>작성중</li>
                            </ul>
                            <ul className="tool">
                                <li>작성중</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">메이트네트웍스</h3>
                            <p className="period">2017년 9월 - 2017년 11월</p>
                            <p className="explan">메이트네트웍스 본사 사이트</p>
                            <ul className="performance">
                                <li>작성중</li>
                            </ul>
                            <ul className="tool">
                                <li>작성중</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            이미지
                        </div>
                    </li>
                </ul>
            </section>
            
        </article>
    );
  };
  
  export default Project;