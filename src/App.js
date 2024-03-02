import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

    </div>
  );
}

export default App;
