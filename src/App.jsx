import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
      </Routes>
    </Router>
  )
}

export default App
