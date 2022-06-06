import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className="Header">
            <div className="header-wrap">
                <h1 className="logo">
                    <Link to="/" className="chat-buble">Hello World 👋</Link>
                </h1>
                
                <a className="mobile-menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                
                <nav className="gnb">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/other">Other</Link></li>
                        <li>
                            <a href='https://www.yeooji.blog/' target='_blank' rel="noopener noreferrer">Blog</a>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;