import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { routes } from "./config/routes";
import { AuthProvider } from "./context";
import { AppRoute as Route } from "./components/AppRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              exact={route.exact}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
