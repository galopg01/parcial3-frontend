import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <div className="mx-2">
                <img className="mx-2" src={user.picture} style={ {borderRadius: '50%', maxWidth: '64px', maxHeight:'64px' }} alt={user.name} />
                {user.email} 
            </div>
        )
    );
}