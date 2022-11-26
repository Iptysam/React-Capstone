import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillSetting } from 'react-icons/ai';

const Nav = () => (
  <nav>
    <NavLink to="/">
      <AiOutlineArrowLeft />
    </NavLink>
    <div>
      Let Us Show You The World
    </div>
    <AiFillSetting />
  </nav>
);

export default Nav;
