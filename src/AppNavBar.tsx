//type Props = { fname: string, lname: string }
import {Link} from "react-router-dom";
function AppNavBar() {
    return (
        <header id="Nav">
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>);
}

export default AppNavBar;