import './AddUser'
import './ViewUser'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

function Home(){
    const navigate=useNavigate();
    return(
        <>
            <div id='home'>
                <div className='det'>
                    <h1>Student Dashboard</h1>
                    <h2>About This System</h2>
                    <p>This is a Student Management System . It allows administrators to efficiently manage student records through a clean and responsive interface.</p>
                    <h3>Features:</h3>
                </div>
                <div className='list'>
                    <ul>
                        <li>Add student details via a structured form</li>
                        <li>View all registered students in a searchable table</li>
                        <li>Delete student records instantly</li>
                        <li>Data stored permanently using MongoDB</li>
                    </ul>
                </div>
                <div id='cards'>
                    <div className='card'>
                        <h2>Add New Student</h2>
                        <p>Register a new student by entering their name,roll number, course, age, and email address.</p>
                        <button id='Bu' onClick={(()=>navigate('/AddUser'))} >Add User</button>
                        
                    </div>
                    <div className='card'>
                        <h2>View All Students</h2>
                        <p>Browse the complete list of enrolled students.Search, filter, and delete records instantly.</p>
                        <button id='Bu' onClick={(()=>navigate('/ViewUser'))}>View User</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;