import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";
import httpClient from '../httpClient';

type StateProps = {    
    name: string;
    token: string;
    authenticated: boolean;   
}

type Credentials = { username: string; password: string };

type DispatchProps = {
    loginUser: (creds: Credentials) => Promise<void>;
}
const Login = (props: DispatchProps & StateProps) => {    
    console.log(props)
    const handleLogin = async (e:any) => {
        e.preventDefault();
        let credentials = {
            username: e.target[0].value,
            password: e.target[1].value
        }    
        props.loginUser(credentials).then(() => {
            navigate("/dashboard");
        });   
    };

    let navigate = useNavigate();
    return (
        <div className="center container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input name="username"></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"></input>
                </div>
                <button type="submit">Login</button>
            </form>           
        </div>
    );
}

const mapStateToProps = (state:any, ownProps:{}): StateProps => {
    return{
        ...ownProps, 
        name: state.name,
        token: state.token,
        authenticated: state.authenticated        
    }
}

const performLogin = (dispatch: any) => async (credentials: Credentials) => {
    const user = {
        name: "",
        token: "",
        authenticated: false
    }
    //
    return httpClient.authenticate(credentials).then((r)=>{            
        user.token = r;
        user.authenticated=true;
        return httpClient.getProfile(r).then(r2=>user.name=r2);
        
    }).then(()=> {
        dispatch({type: 'LOGIN_USER', user: user})    
    });
}

const mapDispatchToProps = (dispatch:any) :DispatchProps => {    
    return{
        loginUser: performLogin(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)