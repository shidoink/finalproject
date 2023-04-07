import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-7vsgpty8ux577fz8.us.auth0.com"
    clientId="0qRky8fMFojKc47IXUaRbGgn6THOu8B2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
