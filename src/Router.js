import { Route, Routes } from "react-router-dom"
import { MainPage } from "./MainPage"
import {DeliveryAccept} from './DeliveryAccept'


export const Router = () => {


    return (
        <Routes>
                <Route index element={<MainPage />} />
                <Route path="order" element={<DeliveryAccept />} />   
        </Routes>
    )
}