import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignOff from "./pages/SignOff";
import ForgotPassword from "./pages/ForgotPass";

import Header from "./components/Header";

function App() {
  return (
    < >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-off" element={<SignOff />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
