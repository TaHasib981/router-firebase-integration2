import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
