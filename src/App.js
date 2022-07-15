import './App.css';
import Navbar from './navbar/navindex';
import Home from './home/homeindex';
import Login from './login/loginindex';
import SignUp from './signup/SignUpindex';
import {HashRouter,Router,Routes,Route} from 'react-router-dom';
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