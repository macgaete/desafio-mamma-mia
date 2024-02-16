import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';

  return (
    <nav>
      <span><img className="nav-logo" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-pizza-logo-design-png-image_5683063.png"></img></span>
      <div className="links">
        <NavLink to="/" className={setActiveClass} > Home </NavLink>
        <NavLink to="/pizza" className={setActiveClass} > Menu </NavLink>
        <NavLink to="/carrito" className={setActiveClass} > Carrito </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
