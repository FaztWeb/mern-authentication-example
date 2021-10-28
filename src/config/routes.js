import { Login } from "../pages/Login";
import { Dashoard } from "../pages/Dashoard";
import { NotFound } from "../pages/NotFound";
import Register from "../pages/Register";
import About from "../pages/About";

export const routes = [
  {
    path: "/",
    component: Login,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/dashboard",
    component: Dashoard,
    isPrivate: true,
  },
  {
    path: "/*",
    component: NotFound,
  },
];
