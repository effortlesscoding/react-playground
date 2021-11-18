import { createContext } from 'react';
export const user = {
    username: "john.smith",
    password: "123"
  };
  
  export const authContext = createContext({
    authenticated: true,
    setAuthenticated: (auth: boolean) => {}
  });


  