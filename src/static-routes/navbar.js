import { Link } from "react-router-dom";

const NavBar = () => {

   const linkStyle={
    textDecoration:"none",
    color:"black"
   } 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">

            <Link to={"/"}  style={linkStyle} >
            Home
            </Link>

            </li>

          <li className="nav-item nav-link">
            
            <Link to={"/about"}  style={linkStyle}> 
            About
            </Link>
           
            </li>

          <li className="nav-item nav-link">
        <Link to={"/settings"}  style={linkStyle}>
         Settings
        </Link>
           
            </li>

          <li className="nav-item nav-link">
            <Link to={"/blog"}  style={linkStyle}>
            Blog
            </Link>
            
            </li>

            <li className="nav-item nav-link">
            <Link to={"/cart-products"}  style={linkStyle}>
            View CartProducts
            </Link>
            
            </li>
  
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
