import React from "react";
import { useAuth } from "../context";
import { Route, Redirect } from "react-router-dom";

export const AppRoute = ({
  component: Component,
  path,
  isPrivate,
  ...rest
}) => {
  const { user } = useAuth();

  console.log({ path, isPrivate });

  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(user.token) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};
