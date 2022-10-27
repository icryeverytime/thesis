import './App.css';
import Navbar from './navbar/navindex';
import Footer from './footer/footer';
import {HashRouter} from 'react-router-dom';
import AnimatedRoutes from './animatedroutes/AnimatedRoutes';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <AnimatedRoutes />

      <Footer/>
    </HashRouter>
  );
}
export default App; 