const initState = {
    name: "stranger3",
    token: "",
    authenticated: false
}
const rootReducer = (state = initState, action:any) => {
    switch(action.type){
        case "LOGIN_USER":
            console.log(action)      
            //debugger;                  
            return{
                    name: action.user.name,
                    token: action.user.token,
                    authenticated: action.user.authenticated
            }    
        case "LOGOUT":
            return initState;
        case "CHANGE_PROFILE": {
            // initUser.username = action.user.username;
            // initUser.password = action.user.password;
        }
    }    
    return state;
}

export default rootReducer;