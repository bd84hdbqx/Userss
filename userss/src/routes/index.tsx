import Navbar from "../layout/navbar";
import Login from "../pages/login";
import UserRout from "../pages/usersRout";
import Register from '../pages/register/index';
import Home from "../pages/home";
import Profil from "../pages/profil";

export const routers=[
    {
        path: "/",
        element: <UserRout/>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/register",
            element: <Register/>,
          },
          {
            path: "/profil",
            element: <Profil/>,
          },
        ],
      },
]