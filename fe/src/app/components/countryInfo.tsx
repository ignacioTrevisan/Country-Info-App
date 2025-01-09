"use client"

import Image from "next/image"
import { CountrieInfo } from "../infraestructure/interfaces/countriesResponses"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PopulationChart } from "./populationChart"

interface Props {
    info: CountrieInfo
}
export const CountryInfo = ({ info }: Props) => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) return (<h1>Loading...</h1>)
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <h1 className="text-3xl font-bold mr-4">{info.commonName}</h1>
                    {
                        info.flag ?
                            <Image
                                src={info.flag}
                                alt={`${info.commonName} flag`}
                                width={60}
                                height={40}
                                className="rounded"
                            />
                            :
                            <></>
                    }
                </div>
                <p><strong>Country code:</strong> {info.countryCode}</p>
                <p><strong>Región:</strong> {info.region}</p>
                <p className="mb-2">
                    <strong>Latest population data: </strong>
                    {Number(info.population[info.population.length - 1].value).toLocaleString()}
                    ({info.population[info.population.length - 1].year})
                </p>
                <Link href={'/'} className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all mt-2">
                    Go home
                </Link>

            </div>
            <h2 className="text-2xl font-semibold mb-4 mt-10">Bordering Countries:</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4 mb-10">



                {info.borders.map((b) => (

                    <li key={b.countryCode} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md cursor-pointer">
                        <Link href={`/info/${b.countryCode}`} className="text-xl font-semibold hover:text-blue-400">{b.commonName}</Link>

                    </li>

                ))}

            </div>
            <PopulationChart population={info.population} />
        </div>
    )
}
