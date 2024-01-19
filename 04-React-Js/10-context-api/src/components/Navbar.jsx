import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Navbar = () => {
    const { isUser, setIsUser } = useContext(UserContext);
    // console.log(isUser);
    return (
        <>
            <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                {!isUser ? <div>
                    <li onClick={()=> setIsUser(true)}>Login</li>
                    <li>Register</li>

                </div> : <li onClick={()=> setIsUser(false)}>Logout</li>}
            </ul>
            {isUser ? <h1>User haa bhai!!</h1> : <h1>User kalti shaart hogaya!</h1>}
        </>
    )
}

export default Navbar