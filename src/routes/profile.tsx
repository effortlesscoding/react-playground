import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';

const Profile = (props:any) =>  {
    let navigate = useNavigate();     
    const handleChange = () => {}   
    if(props.authenticated) {
        return (
            <div className="center container">
                <h2>Login</h2>
                <form onSubmit={handleChange}>
                    <div>
                        <label>Username:</label>
                        <input name="username"></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password"></input>
                    </div>
                    <button type="submit">Change</button>
                </form>           
            </div>
        )
    } else {
        setTimeout(() => {navigate("/login")}, 3000);
        
        return (
            <>
                <h6><Link to="/login">Please login first</Link></h6>

                <p>You will be redirected to the log in page in 3 seconds</p>                
            </>
        )
    }
}



  const mapStateToProps = (state:any) => {
    return{
        authenticated: state.authenticated
    }
  }

  const mapDispatchToProps = (dispatch:any) => {
      return{
          changeProfile: (newUser:any) => {dispatch({type: 'CHANGE_PROFILE', user: newUser})}
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Profile)