
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Header from './Componets/Friend/Header/Header';
import Friends from './Componets/Friends/Friends';
import Home from './Componets/Home/Home';
import NotFound from './Componets/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/friends' element={<Friends></Friends>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
