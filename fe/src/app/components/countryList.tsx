import Link from "next/link"
import { AllCountriesResponse } from "../infraestructure/interfaces/countriesResponses"


interface Props {
    Countries: AllCountriesResponse[]
}
export const CountryList = ({ Countries }: Props) => {
    return (
        <div className="min-h-screen flex justify-center items-center p-2 w-full  ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-lg w-full ">
                {Countries.map((countrie) => (
                    <div className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md cursor-pointer">
                        <Link href={`info/${countrie.countryCode}`} className="text-xl font-semibold hover:text-blue-400">{countrie.name}</Link>
                    </div>
                ))}
            </div>
        </div>

    )
}
