import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider }  from "@auth0/auth0-react";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-jx62rw4jfuvs0gx5.us.auth0.com"
    clientId="111RGWnQ691NWfHAO4avNRGofobqlbEu"
    redirectUri={window.location.origin}>
      <App /> 
    </Auth0Provider>

  </React.StrictMode>
);

