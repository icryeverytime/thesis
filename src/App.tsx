import './App.css';
import Footer from './footer/footer';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import AnimatedRoutes from './animatedroutes/AnimatedRoutes';
import Navbar from './navbar/navindex';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/app/store';
import { useEffect } from 'react';
import { checklogine } from './redux/reducers/reducerCheck';
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