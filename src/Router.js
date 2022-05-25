import { Route, Routes } from "react-router-dom"
import { MainPage } from "./MainPage"
import {DeliveryAccept} from './Components/DeliveryAccept'
import { Registration } from "./Components/Registration"


export const Router = () => {


    return (
        <Routes>
                <Route index element={<MainPage />} />
                <Route path="order" element={<DeliveryAccept />} />  
                <Route path="registration" element={<Registration/>}/> 
        </Routes>
    )
}