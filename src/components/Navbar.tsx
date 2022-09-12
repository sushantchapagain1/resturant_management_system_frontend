import { NavLink } from "react-router-dom";
export const Navbar: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1> Rms</h1>
        <nav className="nav">
          <ul className="nav_lists">
            <NavLink to="/products">products</NavLink>
            <NavLink to="/orders">orders</NavLink>
            <NavLink to="/category">category</NavLink>
            <NavLink to="/users">users</NavLink>
            <NavLink to="/login">login</NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};
