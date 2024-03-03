import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home/Home";
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
    ],
  },
]);

export default router;
