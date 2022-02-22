const Header = () => {
    return(
        <header className="Header">
            <div className="header-wrap">
                <h1 class="logo">
                    <a href="#" className="screen-out">최예지 웹 포트폴리오</a>
                </h1>
                <span className="chat-buble">Hello World 👋</span>
                <nav className="gnb">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;