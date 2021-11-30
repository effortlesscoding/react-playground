import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './routes/login';
import Profile from './routes/profile';
import Dashboard from './routes/dashboard';

const w = window as any;

const store = createStore(rootReducer, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>      
      <Router>      
        <Routes>        
            <Route path="/" element={<App />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
        </Routes>
      </Router>
    </Provider> 
  // </React.StrictMode>,
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
