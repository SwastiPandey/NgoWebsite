import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import Causes from "./pages/Causes";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import RegistrationForm from "./pages/registration";
import FormDonate from "./components/organism/FormDonate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/causes" element={<Causes />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<FormDonate />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
