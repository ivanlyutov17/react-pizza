import { _API_ } from "./constants";



const getAllPizzas = async() => {

    const request = await fetch(`${_API_}/pizzas`)

    const response = await request.json()



    return response
    


}


export const API = {getAllPizzas}