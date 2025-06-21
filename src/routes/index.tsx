import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

enum RoutePaths {
    LandingPage = '/'
}
export const PageRoutes = ()=> {
    return (
        <>
            <Routes>
                <Route path={RoutePaths.LandingPage} element={<LandingPage />} />
            </Routes>
        </>
    )
}