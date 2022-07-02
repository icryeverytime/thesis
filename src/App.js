import './App.css';
import Navbar from './navbar/navindex';
import Home from './home/homeindex';
import Login from './login/loginindex';
import SignUp from './signup/SignUpindex';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="thesis/Login" element={<Login/>}/>
        <Route path="thesis/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}
export default App;