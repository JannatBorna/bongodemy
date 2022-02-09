import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div class="spinner-border spin-col" role="status">
            <span class="sr-only"></span>
        </div>
    }
    return (
        <Route
        {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
        />
    );
};

export default PrivateRoute;