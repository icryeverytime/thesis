import './App.css';
import Navbar from './navbar/navindex';
import Footer from './footer/footer';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import AnimatedRoutes from './animatedroutes/AnimatedRoutes';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <Navbar />
      <AnimatedRoutes />

      <Footer/>
    </HashRouter>
    </Provider>
  );
}
export default App; 