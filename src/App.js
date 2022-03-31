
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import FriendDetail from './Componets/FreindDetail/FriendDetail';
import Header from './Componets/Friend/Header/Header';
import Friends from './Componets/Friends/Friends';
import Home from './Componets/Home/Home';
import NotFound from './Componets/NotFound/NotFound';
import Post from './Componets/Posts/Post';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/friends' element={<Friends></Friends>}></Route>
     <Route path='/post' element={<Post></Post>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
