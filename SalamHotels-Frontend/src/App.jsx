import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default App;
