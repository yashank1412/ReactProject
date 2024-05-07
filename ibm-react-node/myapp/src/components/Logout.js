import { useNavigate } from "react-router-dom";

const Logout = (props) => {

    const navigate = useNavigate();

    const logoutSubmit = () => {
        console.log('logoutSubmit');
        props.setLoginStatus(false);
        alert('You will be logged out...');
        navigate('/home');
    };

    return (
        <>
            <h1>Logout</h1>
            <button onClick={logoutSubmit} >Logout</button>
        </>
    );
};

export default Logout;