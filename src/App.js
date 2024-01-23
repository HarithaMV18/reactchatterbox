import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { SignIn, SignUp, Home } from "./components/index";
import { auth } from "./database/firebase";

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const navigation = () => {
  //     navigate("/signin");
  //   };
  //   navigation();
  // }, []);
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp auth={auth} />} />
        <Route path="/home" element={<Home />} />
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
