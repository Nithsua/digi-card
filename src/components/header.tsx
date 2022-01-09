import image from "../images/nithsua.jpg";

export default function Header() {
    return (
        <header>
            <img src={image} className="header--image"/>
        </header>
    );
}