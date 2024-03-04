import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home/Home";
import FindYourStay from "./components/pages/FindYourStay/FindYourStay";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import PasswordReset from "./components/pages/PasswordReset/PasswordReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookyourtravel",
        element: <FindYourStay></FindYourStay>,
      },
      {
        path: "/login-for-property-owners",
        element: <Login userType={"Property Owner"}></Login>,
      },
      {
        path: "/login-for-traveler",
        element: <Login userType={"Traveler"}></Login>,
      },
      {
        path: "/register-for-property-owners",
        element: <Register userType={"Property Owner"}></Register>,
      },
      {
        path: "/register-for-traveler",
        element: <Register userType={"Traveler"}></Register>,
      },
      {
        path: "/reset-password-property-owner",
        element: <PasswordReset userType={"Property Owner"}></PasswordReset>,
      },
      {
        path: "/reset-password-traveler",
        element: <PasswordReset userType={"Traveler"}></PasswordReset>,
      },
    ],
  },
]);

export default router;
