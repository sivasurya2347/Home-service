import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if(email === '' || password === ''){
      alert("Fill out all the fields");
    }

    setEmail('');
    setPassword('');

    navigate('/')
  };

  return (
    <div className="SignUp" style={{marginTop:"9%"}}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input className='textComponent'
            type="email" 
            id="email" 
            placeholder='E-mail'
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input className='textComponent'
            type="password" 
            id="password" 
            value={password} 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className='SignUpSubmit'
          type="submit">Sign In</button>
      </form>

      <p>Do not have an account <button style={{border:"none", background:"none", color:"darkred", cursor:"pointer"}}
          onClick={() => navigate('/sign-up')}>
          Sign UP
        </button></p>
    </div>
  );
};

export default SignIn;
