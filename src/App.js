 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div  >
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/> 
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
