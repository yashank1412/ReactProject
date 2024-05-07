import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";
import Page404 from './Page404';
import Menubar from "./MenuBar";
import { useState } from "react";
import Register from './Register';
import Profile from "./Profile";
import Logout from './Logout';

const AppRoutes = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const updateLoginStatus = (status) => {
        console.log(status);
        setIsLoggedIn(status);
    };

    if (isLoggedIn) {
        return (
            <>
                <BrowserRouter>
                    <Menubar loginStatus={isLoggedIn} />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="emp" element={<Employee />} />
                        <Route path="parent" element={<Parent />} />
                        <Route path="logout" element={<Logout setLoginStatus={updateLoginStatus} />} />
                        <Route path="profile" element={<Profile />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
    else {
        return (
            <>
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login setLoginStatus={updateLoginStatus} />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
};

export default AppRoutes;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import Parent from "./Parent";
// import Employee from './Employee';
// import Home from "./Home";
// import Page404 from './Page404';
// import Menubar from "./Menubar";

// const AppRoutes = () => {

//     return (
//         <>
//             <BrowserRouter>
//                 <Menubar />
//                 <Routes>
//                     <Route path="home" element={<Home />} />
//                     <Route path="emp" element={<Employee />} />
//                     <Route path="parent" element={<Parent />} />
//                     <Route path="login" element={<Login />} />
//                     <Route exact path="/" element={<Home />} />
//                     <Route path="*" element={<Page404 />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// };

// export default AppRoutes;