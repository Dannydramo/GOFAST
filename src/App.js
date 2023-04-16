import { Fragment } from "react";

import "./index.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Footer from "./Footer";
import { AuthProvider } from "./context/AuthContext";
import Post from "./pages/Post";
import Newsletter from "./pages/Newsletter";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import PrivacyNotice from "./pages/PrivacyNotice";
import RequestRide from "./pages/RequestRide";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Fragment>
      <div className="min-h-screen absolute top-0 bg-[#fff8f8] w-full overflow-x-hidden">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/post" element={<Post />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/terms&categories" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/privacynotice" element={<PrivacyNotice />} />
            <Route
              path="/ride"
              element={
                <ProtectedRoute>
                  <RequestRide />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </AuthProvider>
      </div>
    </Fragment>
  );
}

export default App;
