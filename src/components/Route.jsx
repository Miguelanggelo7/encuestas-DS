import React from 'react';
import { Route as OldRoute, Redirect } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export const Route = ({ children, auth, ...props }) => {
  const user = useUser();
  
  return (
    <OldRoute
      {...props}
      render={({location}) => 
        (auth ? user : !user) ? (
          children
        ) : (
          <Redirect 
            exact
            to={{
              pathname: auth ? "/auth" : "/",
              state: { from: location }
            }}
          />
        )
      }
    >
    
    </OldRoute>
  );
};  
