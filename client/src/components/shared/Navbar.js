import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/billboards'>
        <li>Bllboards</li>
      </Link>
    </ul>
  </>
)

export default Navbar;