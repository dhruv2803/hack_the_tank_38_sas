import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import ClientRegistration from './components/ClientRegistration';
import FranchiseRegistration from './components/FranchiseRegistration';
import OtpVerification from './components/OtpVerification';
import Home from './components/Home';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register/client" element={<ClientRegistration />} />
        <Route path="/register/franchise" element={<FranchiseRegistration />} />
        <Route path="/OTPverification" element={<OtpVerification />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
