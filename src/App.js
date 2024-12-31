import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/nav/Nav';
import Mens from './screens/Mens';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path='/mens' element={<Mens/>}/>
          </Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
