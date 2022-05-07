
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Social from './Pages/Login/Social/Social';
import Footer from './Pages/Share/Footer/Footer';
import NotFound from './Pages/Share/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
        <Route path ='/register' element={<Register></Register>}></Route>
        <Route path='/social' element={<Social></Social>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
