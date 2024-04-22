import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Details from './pages/Details';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
