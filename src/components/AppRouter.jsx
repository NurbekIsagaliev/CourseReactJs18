import React, { useContext } from 'react';
import '../styles/App.css';
import Error from '../pages/Error';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/router';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import About from '../pages/About';
import { AuthContext } from '../context/context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {

  const {isAuth,isLoading} = useContext(AuthContext);
  console.log(isAuth);

  if(isLoading){
   return <Loader/>
  }



  return (


    
  isAuth 
  ?
   
      <Routes>
    
     {privateRoutes.map(route =>
          <Route
            element={route.element}
            path={route.path}
            key ={route.path}
          />
        )}  
        <Route path="/" element={<Posts />} />
        <Route path="*" element={<Error />} />
    
        </Routes>
        :
        
      <Routes>

       {publicRoutes.map(route =>
          <Route
            element={route.element}
            path={route.path}
            key ={route.path}

          />
        )}

        <Route path="/posts" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />

        
    
    
      </Routes>
   

    
  );

};

export default AppRouter;