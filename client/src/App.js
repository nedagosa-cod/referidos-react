import { Route, Routes } from 'react-router-dom';
import Estado from './pages/Estado.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import NotFoundPage from './pages/NotFoundPage.js';
import Navbar from './components/Navbar.js'
import Referir from './pages/Referir.js';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/referir" element={<Referir/>} />
        <Route path="/estado" element={<Estado/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
