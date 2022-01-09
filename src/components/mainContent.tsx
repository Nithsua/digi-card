import { FunctionComponent } from "react";
import { FiMail } from "react-icons/fi";

interface MainContentProps {}

const mailTo = () => {
    window.location.href = 'mailto:nivasmuthu452@gmail.com';
}

const about = "I am a fullstack developer with a interest in peeking into everything thats tech and love for systems and linux stuff";
const interests = "Culture addict, Kaffee fanatic, Travel love, Some books ig, Breaking and Fixing, Doing the unconventional";
 
const MainContent: FunctionComponent<MainContentProps> = () => {
    return ( 
        <div className="main">
            <div className="main--title">
                <h1>Nithsua</h1>
                <h5>FullStack Developer</h5>
                <a href="https://nithsua.live" target="_blank" className="main--link">nithsua.live</a>
                <br />
                <button className="email-button" onClick={mailTo}>
                    <FiMail size="24px" style={{ paddingRight: "10px" }}/>
                    Email
                </button>
            </div>
            <div className="main--content">
                <h4>About</h4>
                <p>{ about }</p>
                <h4>Interests</h4>
                <p>{ interests }</p>
            </div>
        </div>
    );
}
 
export default MainContent;