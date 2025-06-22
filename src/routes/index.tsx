import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

enum RoutePaths {
    LandingPage = '/',
    LoginPage = '/login',
    SignupPage = '/signup',
}
export const PageRoutes = ()=> {
    return (
        <>
            <Routes>
                <Route path={RoutePaths.LandingPage} element={<LandingPage />} />
                <Route path={RoutePaths.LoginPage} element={<LoginPage />} />
                <Route path={RoutePaths.SignupPage} element={<SignupPage />} />
            </Routes>
        </>
    )
}