import './styles.css';
import { ReactComponent as YouTubeIcon} from './youtube.svg';
import { ReactComponent as LinkedInIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Prototype of a Web Front-end
            <div className="footer-icons">
                <a href="youtube" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="linkedin" target="_new">
                    <LinkedInIcon />
                </a>
                <a href="instagram" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;