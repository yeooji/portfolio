import { Link } from 'react-router-dom';

const Header = () => {

    /* console.log('머리'); */

    return(
        <header className="Header">
            <div className="header-wrap">
                <h1 class="logo">
                    {/* <a href="#" className="screen-out">최예지 웹 포트폴리오</a> */}
                    <Link to="/" className="chat-buble">Hello World 👋</Link>
                </h1>
                
                <nav className="gnb">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/other">Other</Link></li>
                        <li><a href='https://www.yeooji.blog/' target='_blank'>Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;