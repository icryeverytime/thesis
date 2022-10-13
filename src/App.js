import './App.css';
import Navbar from './navbar/navindex'
import {HashRouter,Routes,Route} from 'react-router-dom';
import Home from './home/homeindex';
import Login from './login/loginindex'
import SignUp from './signup/SignUpindex'
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="thesis/Login" element={<Login/>}/>
        <Route path="thesis/SignUp" element={<SignUp/>}/>
      </Routes>
    </HashRouter>
  );
}
export default App; 