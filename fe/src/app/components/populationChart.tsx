"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Population } from '../infraestructure/interfaces/countriesResponses';

interface Props {
    population: Population[]
}
export const PopulationChart = ({ population }: Props) => {

    console.log({ population })
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={population}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    )
}
