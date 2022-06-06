import { Link } from "react-router-dom";

const ProjectList = () => {

    return (
        <div>
            {/* <section className="group">
                <div className="group-title">
                    <h3 className="title">이노레드</h3>
                </div>

                <ul className="project-list">
                    <li className="project-item"></li>
                </ul>
            </section> */}

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
                                <li>jQuery를 활용한 UI 개발</li>
                                <li>CodeIngniter를 활용한 기능 개발</li>
                                <li>회원가입 기능 개발</li>
                                <li>계정 정보 변경 기능 개발</li>
                                <li>기업 등록 및 검색 기능 개발</li>
                                <li>게시물 CRUD 기능 개발</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>CodeIngniter</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/7'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview07.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">IR Canvas</h3>

                            <p className="period">2021년 4월 - 2021년 7월</p>
                            <p className="explan">온라인 비대면 사업계획서 작성 및 코칭 플랫폼</p>
                            <ul className="performance">
                                <li>PC 프론트 리팩터링 개발 참여</li>
                                <li>jQuery를 활용한 UI 개발</li>
                                <li>CodeIngniter를 활용한 기능 개발</li>
                                <li>AWS S3를 활용한 이미지 업로드 기능 사용 경험</li>
                                <li>Mux를 활용한 동영상 컨버팅 기능 사용 경험</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>CodeIngniter</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/6'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview06.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">한국 스타트업 투자정보</h3>

                            <p className="period">2020년 9월 - 2021년 3월</p>
                            <p className="explan">스타트업 대상 투자가치산출 및 기업 정보 제공 플랫폼</p>
                            <ul className="performance">
                                <li>PC/Mobile 프론트 리팩터링 개발 참여</li>
                                <li>jQuery를 활용한 UI 개발</li>
                                <li>CodeIngniter(PHP)를 활용한 기능 개발</li>
                                <li>summernote를 활용한 게시물 작성 기능 개발</li>
                                <li>뉴스 댓글 CRUD 기능 개발</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>CodeIngniter</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/5'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview05.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">사내 백오피스</h3>

                            <p className="explan">테크밸류에서 제공하는 웹 서비스의 데이터 관리 사이트</p>
                            <ul className="performance">
                                <li>Bootstrap을 활용한 UI 개발</li>
                                <li>CodeIngniter(PHP)를 활용한 기능 개발</li>
                                <li>기업 관리 및 검색 기능 개발</li>
                                <li>팝업 공지 생성 및 관리 기능 개발</li>
                                <li>c3.js를 활용한 대시보드 통계 차트 개발</li>
                                <li>AWS S3를 활용한 이미지 업로드 기능 개발</li>
                            </ul>
                            <ul className="tool">
                                <li>Bootstrap</li>
                                <li>CodeIngniter</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/4'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview04.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
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
                            <h3 className="title">
                                <a href='http://www.jayhue.co.kr/' target="_blank" rel="noopener noreferrer" className='link'>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/hyperlink.png`} width="16" height="16" alt='link'/> 제이휴
                                </a>
                            </h3>
                            <p className="period">2019년 7월 - 2019년 9월</p>
                            <p className="explan">해외 고객과 국내 성형외과 매칭 기업 사이트</p>
                            <ul className="performance">
                                <li>신규 오픈 런칭 참여</li>
                                <li>jQuery를 활용한 UI 개발</li>
                                <li>반응형 웹 고려</li>
                                <li>그누보드를 활용한 다국어(영어, 태국어) 제공</li>
                            </ul>
                            <ul className="tool">
                                <li>jQuery</li>
                                <li>Gnuboard</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/3'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview03.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">
                                <a href='https://www.matembox.co.kr/' target="_blank" rel="noopener noreferrer" className='link'>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/hyperlink.png`} width="16" height="16" alt='link'/> 메이트엠박스
                                </a>
                            </h3>
                            <p className="period">2018년 4월 - 2018년 7월</p>
                            <p className="explan">영상 녹음 스튜디오 노래방 메이트엠박스의 가맹 안내 사이트</p>
                            <ul className="performance">
                                <li>신규 서비스 런칭 참여</li>
                                <li>Bootstrap을 활용한 UI 개발</li>
                                <li>상세페이지 및 세부 콘텐츠 디자인</li>
                            </ul>
                            <ul className="tool">
                                <li>Bootstrap</li>
                                <li>Gnuboard</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/2'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview02.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
                        </div>
                    </li>

                    <li className="project-item">
                        <div className="project-info">
                            <h3 className="title">
                                <a href='http://www.matenetworks.co.kr/' target="_blank" rel="noopener noreferrer" className='link'>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/hyperlink.png`} width="16" height="16" alt='link'/> 메이트네트웍스
                                </a>
                            </h3>
                            <p className="period">2017년 9월 - 2017년 11월</p>
                            <p className="explan">메이트네트웍스 본사 사이트</p>
                            <ul className="performance">
                                <li>전체 리뉴얼 참여</li>
                            </ul>
                            <ul className="tool">
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="project-visual">
                            <Link to={'/project/1'} className="visual-img-box">
                                <img src={process.env.PUBLIC_URL + `/assets/images/list_overview01.jpg`} alt="visual-img" />
                                <div className="img-wrap">
                                    <span className="line-right"></span>
                                    <span className="line-top"></span>
                                    <span className="line-left"></span>
                                    <span className="line-bottom"></span>
                                </div>
                            </Link>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ProjectList;