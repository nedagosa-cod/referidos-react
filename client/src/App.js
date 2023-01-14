import { Route, Routes } from 'react-router-dom';
import Estado from './pages/Estado.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/estado" element={<Estado/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
