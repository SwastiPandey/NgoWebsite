import "./App.css";

import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import ContactForm from "./pages/ContactUs";


function App() {
  return (
    <div>
      <Header />
      <Outlet />
    
    </div>
  );
}

export default App;
