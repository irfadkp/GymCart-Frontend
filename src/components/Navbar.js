import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar">
            <Link to="/">GymCart</Link>
            <Link to="/cart"></Link>
        </nav>
    );
};

export default Navbar;