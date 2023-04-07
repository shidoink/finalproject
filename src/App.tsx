import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import routes from './config/routes'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import './App.css'
import Navbar from './components/Navbar'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

function App() {
  

  return (
   <BrowserRouter>
   <Navbar/>
  
    <Routes>
      {routes.map((route, index)=>(
        <Route
        key={index}
        path={route.path}
        element={<route.component/>} />
      ))}
    </Routes>
    </BrowserRouter>
  )
}

export default App
