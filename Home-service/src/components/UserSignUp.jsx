import React, { useState } from "react";
import SigningUp from './SigningUp'; // Import the SigningUp component
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
    const [currentForm, setCurrentForm] = useState('user'); // State to manage which form to show

    // Function to switch between UserSignUp and SigningUp forms
    const toggleForm = (formType) => {
        setCurrentForm(formType);
    };

    return (
        <div >
            {/* Toggle Buttons */}
            <div className="ToogleDiv">
                <button 
                    onClick={() => toggleForm('user')} 
                    className="Toogle"
                    // className={`switch-button ${currentForm === 'user' ? 'active' : ''}`}
                >
                    User
                </button>
                <button 
                    onClick={() => toggleForm('employee')} 
                    className="Toogle"
                    // className={`switch-button ${currentForm === 'employee' ? 'active' : ''}`}
                >
                    Employee
                </button>
            </div>
        
            {currentForm === 'user' ? (
                <UserSignUpForm />
            ) : (
                <SigningUp />
            )}
        </div>
    );
};

// Component for User Sign Up form
const UserSignUpForm = () => {
    const [userName, setUserName] = useState('');
    const [mailId, setMailId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        if(userName === '' || mailId === '' || password === '' || confirmPassword === ''){
            alert("Fill out all the fields!");
            return;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }

        setUserName('');
        setMailId('');
        setPassword('');
        setConfirmPassword('');

        // Assuming you want to navigate somewhere after submission
        navigate('/');
    };

    return(
        <div>
            <div className="SignUp">
                <div><h1 id="SignUpHeader">Sign Up</h1></div>
                <form onSubmit={handleSignUp}>
                    <div>
                        <input className="textComponent"
                        type="text"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <input className="textComponent"
                        type="text"
                        placeholder="Mail Id"
                        value={mailId}
                        onChange={(e)=>setMailId(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <input className="textComponent"
                        type={showPassword?'text':'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <input className="textComponent"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div style={{justifyContent:"end", display:"flex", paddingRight:"40px"}}>
                    <input 
                        type='checkbox' 
                        onChange={(e)=> setShowPassword(!showPassword)}
                    />Show Password
                    </div>

                    <button className='SignUpSubmit'
                     type='submit' value="Sign Up">Submit
                    </button>

                </form>
                <div>
                    <p>Already have an account <button style={{border:"none", background:"none", color:"darkmagenta", cursor:"pointer"}}
                        onClick={()=>navigate('/sign-in')}
                        value="SignIn" >
                        Sign In
                    </button>?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;
