import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import AddUser from './pages/AddUser' 
import ViewUser from './pages/ViewUser' 

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <div id='head1'>
            <div className='head'>
              <h1>Student Management System</h1>
            </div>
            <div id='Nav1'>
              <Nav/>
            </div>
            
            
          </div>
        </header>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/AddUser" element={<AddUser/>}/>
          <Route path="/ViewUser" element={<ViewUser/>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        <p>2026@Student management System</p>
      </footer>

    </>
  )
}

export default App
