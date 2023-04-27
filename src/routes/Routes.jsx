import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import PrivateRoute from "./PrivateRoute";

const router  = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
               element: <Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'orders',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            }
        ]

    }
])

export default router;