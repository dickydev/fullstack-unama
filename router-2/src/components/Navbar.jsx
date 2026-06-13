import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    marginRight: '12px',
    color: isActive ? 'blue' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/profile" style={linkStyle}>
        Profile
      </NavLink>

      <NavLink to="/settings" style={linkStyle}>
        Settings
      </NavLink>
      <a href="/">Home</a>
    </nav>
  );
}
