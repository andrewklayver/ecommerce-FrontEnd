// eslint-disable-next-line
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/home";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";

const RoutesApp = () => {
    return(
        <BrowserRouter>
          <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/Login" element={<Signin />} />

          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

