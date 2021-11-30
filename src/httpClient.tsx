const baseURL='http://localhost:3000/api';
const headers= {"Content-Type": "application/json"}; 
type credentialsType ={
    username:string, 
    password:string
}

class httpClient {
    authenticate = async (credentials:credentialsType) => {
        let options = {
            method: 'POST', headers, body: JSON.stringify(credentials)
        }
        console.log(options.body)
        return fetch(baseURL+"/authentication", options).then((r)=>{
            //if(r.ok){
                return r.json();
            //}
        }).then((r2)=>{
            return "authToken: " + r2.authToken;
        }).catch((e) => {
            alert('FAILED')
            throw e;
        })
        
    }    
        
    changeProfile = async (token:string) => {        
        let options = {
            method: 'PUT', headers: {...headers, authorization: token}
        }
        return fetch(baseURL+"/profile", options);
    }

    getProfile = async (token:string) => {
        console.log(token)
        let options = {
            method: 'GET', headers: {...headers, authorization: token}
        }
        return fetch(baseURL+"/profile", options).then((r)=>{
            // if(r.ok){
                return r.json()
            // }
        }).then((r2)=>{
            console.log(r2)            
            return r2.firstName + " " + r2.lastName;
        });
    }

    saveToken = async (token:string) => {
        let options = {
            method: 'GET', headers: {...headers, authorization: token}
        }
        return fetch(baseURL+"/profile", options).then((r)=>{
             
        }) 
    }

    // fetchMethod = (url:string, options:{}) => {
    //     let response = {
    //         status: 0,
    //         body: ""
    //     }
    //     console.log(url, options);
    //     fetch(url, options).then((r) => {
    //         console.log(r);
    //         if (!r.ok) {
    //             response.status= r.status;
    //             response.body= r.statusText;
    //         }
    //         return r.json()
    //     }).then((r2)=>{
    //         response.status = 200;
    //         response.body = r2;
    //     });
    //     return response;
    // }
    
}
export default new httpClient()