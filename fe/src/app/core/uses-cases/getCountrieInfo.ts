'use server'

import { ApiResponse } from "@/app/infraestructure/interfaces/ApiResponses";
import { CountrieInfo } from "@/app/infraestructure/interfaces/countriesResponses";


export const GetCountrieInfo = async (code: string): Promise<ApiResponse<CountrieInfo>> => {
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/info/${code}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await resp.json() as CountrieInfo;
        console.log({ data })
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
