import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/index"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
        </Routes>
    )
}