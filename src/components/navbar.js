import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="same">
    <h1 className="heading">Math Magicians</h1>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quote</Link>
    </ul>
  </nav>
);

export default Nav;
