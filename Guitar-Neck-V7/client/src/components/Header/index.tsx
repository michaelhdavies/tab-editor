import { Link } from 'react-router-dom';
import { type MouseEvent } from 'react';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Logs the user out by calling the logout method from Auth
    Auth.logout();
  };
  return (
    <header>
      <div>
        <div>
          <Link to="/">
            <h1>Tabulator</h1>
          </Link>
          <p>Come with me if you want to tab</p>
        </div>
        <div>
          {/* Checking if the user is logged in to conditionally render profile link and logout button */}
          {Auth.loggedIn() ? (
            <>
              <h3>
                Username: {Auth.getProfile().data.username}
              </h3>

              <button className="logoutButton" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="loginButton" to="/login">
                Login
              </Link>
              <Link className="signupButton" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
