import './App.css';
import Navbar from './navbar/navindex.tsx';
import Footer from './footer/footer.tsx';
import {HashRouter} from 'react-router-dom';
import AnimatedRoutes from './animatedroutes/AnimatedRoutes.tsx';
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