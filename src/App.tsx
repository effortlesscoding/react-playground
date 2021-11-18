import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import AppNavBar from './AppNavBar';
import AppContent from './AppContent';
import { Outlet, Link } from "react-router-dom";
import { authContext } from './user';


const App = function () {
  let [auth, setAuth] = useState(false);

  // let [fname, setfName] = useState("John");
  // let [lname, setlName] = useState("Smith");
  // const dataEx = (fn: string, ln: string) => {
  //  setfName(fn);
  //  setlName(ln);
  // }
  // useEffect(() => {

  //   return () => {

  //   };
  // }, []);
  console.log(auth);
  return (
    <>
    <authContext.Provider value={{authenticated: auth , setAuthenticated: (e:boolean) => {setAuth(e)}}}>
      <div> user is {`${auth ? "" : "not"} authenticated`} </div>
      
      <AppNavBar></AppNavBar>
      <Outlet />
      </authContext.Provider>
    </>
  );
};

export default App;
