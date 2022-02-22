const Footer = () => {
    const nowYear = new Date().getFullYear();

    return(
        <footer className="Footer">
            <div className="footer-wrap">
                <div className="copyright">
                    <span>&copy; choi yeji. {nowYear}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;