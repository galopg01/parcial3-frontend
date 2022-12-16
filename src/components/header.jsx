import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './login'
import { Profile } from './profile'
import { LogoutButton } from './logout'

export const Header = () => {

    const {isAuthenticated} = useAuth0();

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">EMTInfo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    {isAuthenticated ? <>
                        <Profile />
                        <LogoutButton />
                    </> : <LoginButton />}
                    
                </div>
            </div>
        </nav>
        
    )

    
}

