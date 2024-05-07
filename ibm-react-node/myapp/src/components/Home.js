import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setEmpObj } from "../redux/EmpSlice";
import { useEffect } from "react";

const Home = () => {
    const dispatch = useDispatch();
const dataFromStore = useSelector(store => store.emp.empObj);
    useEffect(() => { }, [dataFromStore]);

    const sendDataToStore = () => {
        console.log('sendDataToStore');
        const dataToSend = {
            firstName: 'Siddharth', salary: 13.50
        };
        dispatch(setEmpObj(dataToSend));
    }
    console.log(dataFromStore);
    return (
        <>
            <h1>Home Component</h1>
            <>
                <p>Data received from store</p>
                <p>{dataFromStore &&
                    <span>{dataFromStore.firstName} {dataFromStore.salary}</span>
                }  </p>
            </>
            <>
                <button onClick={sendDataToStore} >Send data to store</button>
            </>

            <p>Login testing</p>
            <Link to={'/home'}>Home</Link>
            <br />
            <Link to={'/emp'}>Employee</Link>
            <br />
            <Link to={'/parent'}>Parent</Link>
            <br />
            <Link to={'/profile'}>Profile</Link>
            <br />
            <Link to={'/register'}>Register</Link>
            <br />
            <Link to={'/login'}>Login</Link>
            <br />
            <Link to={'/logout'}>Logout</Link>

        </>
    );
};

export default Home;










// import { Link } from "react-router-dom";

// const Home = () => {
//     const backgroundImageIbm = 'https://e1.pxfuel.com/desktop-wallpaper/648/58/desktop-wallpaper-6-ibm-imb.jpg';

//     return (
//         <>
//             <div
//                 style={{
//                     backgroundImage: `url(${backgroundImageIbm})`,
//                     backgroundSize: 'cover',
//                     backgroundColor: 'black',
//                     display: 'flex',
//                     minHeight: "100vh",
//                     alignItems: 'center',
//                     justifyContent: 'right',
//                 }}
//             >
//                 <div style={{ color: 'white' }}>
//                     <h1>IBM React App</h1>
//                     <Link style={{ textDecoration: 'none' }} to='/login'>Login to continue...</Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;