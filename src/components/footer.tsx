import { FunctionComponent } from "react";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className="footer">
            <a href="https://github.com/Nithsua" className="social-logo"> <FaGithubSquare size="40px" color="white"/> </a>
            <a href="https://twitter.com/nithsua" className="social-logo"> <FaTwitterSquare size="40px" color="white"/> </a>
        </div>
    );
}
 
export default Footer;