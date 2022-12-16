import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider }  from "@auth0/auth0-react";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain={process.env.REACT_APP_DOMAIN}
    clientId= {process.env.REACT_APP_CLIENT_ID}	
    redirectUri={window.location.origin}>
      <App /> 
      {console.log(process.env.REACT_APP_DOMAIN)}
    </Auth0Provider>

  </React.StrictMode>
);

