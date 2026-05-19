import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import '../styles/Nav.css'

function Nav(){
    return(
        <>
            <nav>
                <div>
                    <Link id='li' to='/Home'>Home</Link>
                </div>
                <div>
                    <Link id='li' to='/AddUser'>Add User</Link>
                </div>
                <div>
                    <Link id='li' to='/ViewUser'>View User</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;