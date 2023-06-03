import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <div className="headerContent">
                <span className="headerText">Header</span>
                <Link to="/login" className="linkStyle">Login</Link>
            </div>
        </div>
    );
};

export {Header}