import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "./Sign.css"

import "react-datepicker/dist/react-datepicker.css";


const SigningUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState(null); // Date object for date of birth
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [mailId, setMailId] = useState('');

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log('Form submitted');
        if (
            firstName === '' || lastName === '' || gender === '' || dob === null ||
            address === '' || username === '' || password === '' || confirmPassword === ''|| mailId===''
          ) {
            alert('Please fill in all fields.');
            return;
          }
        
        if(password !== confirmPassword){
            alert('please check the password');
            return;
        }

        setFirstName('');
        setLastName('');
        setGender('');
        setDob(null);
        setAddress('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setMailId('');

        // alert('SignedUp succesfully!!');
        navigate('/');
    };

    return (
        <div>
            <div className='SignUp'>
            <div><h1 id='SignUpHeader'>Sign Up</h1></div>
            <form onSubmit={handleSignUp}>
                <div >
                    <input className='textComponent'
                        type='text'
                        value={firstName}
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input className='textComponent'
                        type='text'
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className='SignUpRadio'>
                    <label>Gender</label>
                    <label>
                        <input
                            type='radio'  value='male'  checked={gender === 'male'}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        /> Male
                    </label>
                    <label>
                        <input type="radio" value="female" checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        /> Female
                    </label>
                </div>
                <div>
                    <DatePicker className='textComponent'
                    placeholderText='Date of Birth'
                    selected={dob} 
                    onChange={(date)=> setDob(date)}
                    required/>
                </div>
                <div>
                    <textarea className='textComponent' style={{textAlign:"center",paddingTop:"14px"}}
                        placeholder='Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input className='textComponent'
                        type='text'
                        placeholder='User Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input className='textComponent'
                        type='text'
                        placeholder='E-mail Id'
                        value={mailId}
                        onChange={(e) => setMailId(e.target.value)}
                    />
                </div>
                <div>
                    <input className='textComponent'
                        type={showPassword?'text':'password'}
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div style={{justifyContent:"end", display:"flex", paddingRight:"40px"}}>
                    <input 
                        type='checkbox' 
                        onChange={(e)=> setShowPassword(!showPassword)}
                    />Show Password
                </div>
                <div>
                    <input className='textComponent'
                        value={confirmPassword}
                        placeholder='confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Add other form fields similarly */}
                {/* <Link to="/"> */}
                    <button className='SignUpSubmit'
                     type='submit' value="Sign Up">Submit
                    </button>
                {/* </Link> */}
            </form>
            <div>
                {/* <pre> */}
                <p>Already have an account <button style={{border:"none", background:"none", color:"darkmagenta", cursor:"pointer"}}
                        onClick={()=>navigate('/sign-in')}
                        value="SignIn" >
                        Sign In
                    </button>?</p>
                {/* </pre> */}
            </div>
            </div>
        </div>
    );
};

export default SigningUp;
