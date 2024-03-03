import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home/Home";
import FindYourStay from "./components/pages/FindYourStay/FindYourStay";
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
    ],
  },
]);

export default router;
