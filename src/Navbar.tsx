import { Link } from "react-router-dom";
import {connect} from 'react-redux';

function Navbar(props:any) {
    return (
        <nav className="nav-extended">
            <div className="nav-wrapper">
            <Link to="/">Home</Link>
            <ul id="nav-mobile" className="right">
                <li>Hello {props.name}</li>
                {props.authenticated ? (null) : (<li><Link to="/login">Login</Link></li>)}
                {props.authenticated ? (<li><Link to="/" onClick={props.logout}>Logout</Link></li>) : (null)}
            </ul>
            </div>
            <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li className="tab"><Link to="/dashboard">Dashboard</Link></li>
                <li className="tab"><Link to="/profile">Profile</Link></li>
            </ul>
            </div>
        </nav>);
}

const mapStateToProps = (state:any) => {
    return{
        authenticated: state.authenticated,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        logout: () => {dispatch({type: 'LOGOUT'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
