import { Link } from "react-router-dom";

const Menubar = (props) => {

    if (props.loginStatus) {
        return (
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/emp'}>Employee</Link> </li>
                    <li> <Link to={'/parent'}>Parent</Link> </li>
                    <li> <Link to={'/logout'}>Logout</Link> </li>
                </ul>
            </>
        );
    }
    else {
        return (
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/register'}>Register</Link> </li>
                    <li> <Link to={'/login'}>Login</Link> </li>
                </ul>
            </>
        );
    }
};

export default Menubar;