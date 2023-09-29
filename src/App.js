import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./pages/registration";
import Header from "./components/header";
import AboutUs from "./pages/AboutUs";
import home from "./pages/home";



function App() {

  return (
    //  <Provider store={store}>
        // <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter className="App">
        <Header />
        <Routes>
          <Route path="/" element={<home/>} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path ="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      //  </PersistGate>
    //  </Provider>
  );
}

export default App;
 