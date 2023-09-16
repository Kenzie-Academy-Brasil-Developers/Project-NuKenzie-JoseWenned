import { Routes, Route } from "react-router-dom";
import { HomeRegister } from "../pages/HomeRegister/index"
import { HomePage } from "../pages/HomePage";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/HomeRegister" element={<HomeRegister/>}></Route>
        </Routes>
    )
}