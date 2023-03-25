import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import ClientRegistration from './components/ClientRegistration';
import FranchiseRegistration from './components/FranchiseRegistration';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register/client" element={<ClientRegistration />} />
        <Route path="/register/franchise" element={<FranchiseRegistration />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
