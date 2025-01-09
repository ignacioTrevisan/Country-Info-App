'use server'

import { ApiResponse } from "@/app/infraestructure/interfaces/ApiResponses";
import { AllCountriesResponse } from "@/app/infraestructure/interfaces/countriesResponses";


export const GetAllCountries = async (): Promise<ApiResponse<AllCountriesResponse[]>> => {
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await resp.json() as AllCountriesResponse[];
        return {
            ok: true,
            data: data
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false
        }
    }
}
