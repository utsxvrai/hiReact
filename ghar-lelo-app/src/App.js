import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignOff from "./pages/SignOff";
import SignIn from "./pages/Signin";
import ForgotPass from "./pages/ForgotPass";
function App() {
  return (
    < >
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/offers" element={<h1>Offers</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/sign-off" element={<h1>Sign Off</h1>} />
          <Route path="/sign-in" element={<h1>Sign In</h1>} />
          <Route path="/forgot-password" element={<h1>Forgot Pass</h1>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
