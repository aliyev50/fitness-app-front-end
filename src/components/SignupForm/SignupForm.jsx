import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });
  const updateMessage = (msg) => {
    setMessage(msg);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };
  const { username, password, passwordConf } = formData;
  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };
  return (
    <body  >
   <div id="training">
        <div className="boxes">
      <main className="mainsign">
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordConf">Confirm Password:</label>
          <input
            type="password"
            id="passwordConf"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="sigin" type="submit" disabled={isFormInvalid()}>
            Sign Up
          </button>
          <Link to="/">
            <button className="sigin" type="button">Cancel</button>
          </Link>
        </div>
      </form>
    </main>
    </div>
     
    </div>
  
</body>
  );
};
export default SignupForm;
