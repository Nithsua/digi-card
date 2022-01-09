import { FunctionComponent } from "react";
import github from "../images/social/github.png";
import twitter from "../images/social/twitter.png";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className="footer">
            <ul>
                <li><img src={ github } className="social-logo"/></li>
                <li><img src={ twitter } className="social-logo"/></li>
            </ul>
        </div>
    );
}
 
export default Footer;