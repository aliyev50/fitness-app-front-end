import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import './Signin.css';

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      console.log(user);
      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (

    <body>
      
      
        <div id="training">
        <div className="boxes">
      <main className="mainsign">
      <h1>Sign In</h1>
      <p>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" > Username: </label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="sigin" type="submit">Sign In</button>
          <Link to="/">
            <button className="sigin" type="button">Cancel</button>
          </Link>
        </div>
      </form>
    </main>
    </div>
      <div className="training-galery">
        <div className="img-container img-1">
          <h1>Crossfit</h1>
        </div>
        <div className="img-container img-2">
          <h1>Body Building</h1>
        </div>
        <div className="img-container img-3">
          <h1>Pilates</h1>
        </div>
      </div>
    </div>
     
      
    </body>
    

    
  );
};

export default SigninForm;
