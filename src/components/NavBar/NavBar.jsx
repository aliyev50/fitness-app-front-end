import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.module.css';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/profile'>PROFILE</Link></li>
            <li><Link to='/workouts'>WORKOUTS</Link></li>
            <li><Link to='/meals'>MEALS</Link></li>
            <li><Link to='' onClick={handleSignout}>SIGN OUT</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
