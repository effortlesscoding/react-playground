import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './dashboard';
import Profile from './profile';
import { authContext } from "../../user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


// function RestrictedWithRenderFunction() {
//     console.log(authContext);
//     let content;

//     return (
//         <authContext.Consumer>
//             {({ authenticated, setAuthenticated }) => {
//                 if (authenticated) {
//                     return (
//                         <>
//                             <div>
//                                 <a href="/">Home</a>
//                                 <a href="/restricted/dashboard">Dashboard</a>
//                                 <a href="/restricted/profile">Profile</a>
//                             </div>
//                             <Routes>
//                                 <Route path="dashboard" element={<Dashboard />} />
//                                 <Route path="profile" element={<Profile />} />
//                             </Routes>
//                         </>
//                     );
//                 }
//                 return <>????</>;
//             }}
//         </authContext.Consumer>
//     );
// }

function Restricted() {
    let content;
    const { authenticated, setAuthenticated } = useContext(authContext);
    let navigate = useNavigate();
    if(!authenticated){
        setTimeout(() => {navigate("/login");}, 0)
    }

    // <authContext.Consumer>
    //     {renderFunction}
    // </authContext.Consumer>
    if(authenticated){
        content = (<><div>
            <Link to="/">Home</Link>
            <Link to="/restricted/dashboard">Dashboard</Link>
            <Link to="/restricted/profile">Profile</Link>
        </div>
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
        </Routes></>)
    } else {
        content = (
            <a href="/login">Please Login</a>
        )
    }
    return (
        <header id="Res">
            {content}
        </header>
        );
}

export default Restricted;