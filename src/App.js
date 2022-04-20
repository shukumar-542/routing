import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
