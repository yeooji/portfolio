const Header = () => {
    return(
        <header className="Header">
            <div className="header-wrap">
                <h1 class="logo">
                    {/* <a href="#" className="screen-out">최예지 웹 포트폴리오</a> */}
                    <a href="#"className="chat-buble">Hello World 👋</a>
                </h1>
                
                <nav className="gnb">
                    <ul>
                        <li><a href="#">{/* 🏡 */} Home</a></li>
                        <li><a href="#">{/* 💻 */} Project</a></li>
                        <li><a href="https://www.yeooji.blog/" target="_blank">{/* 📝 */} Blog</a></li>
                        <li><a href="https://github.com/yeooji" target="_blank">{/* 🐱 */} Github</a></li>
                    </ul>
                </nav>
                {/*<a href="#" className="mobile-menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>*/}
            </div>
        </header>
    );
};

export default Header;