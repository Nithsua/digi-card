import { FunctionComponent } from "react";
import { FiMail } from "react-icons/fi";

interface MainContentProps {}

const mailTo = () => {
    window.location.href = 'mailto:nivasmuthu452@gmail.com';
}
 
const MainContent: FunctionComponent<MainContentProps> = () => {
    return ( 
        <div className="main">
            <div className="main--title">
                <h1>Nithsua</h1>
                <h5>FullStack Developer</h5>
                <a href="https://nithsua.live" className="main--link">nithsua.live</a>
                <br />
                <button className="email-button" onClick={mailTo}>
                    <FiMail size="24px" style={{ paddingRight: "10px" }}/>
                    Email
                </button>
            </div>
            <div className="main--content">
                <h4>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    );
}
 
export default MainContent;