import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Cont = styled.div`
margin: 20px;
padding: 20px;
box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`
const Title = styled.h3`
margin-bottom: 10px;
`

const Chart = ({title, data, dataKey, grid}) => {



    return (
        <Cont>
            <Title>{title}</Title>
            <ResponsiveContainer width= "100%" aspect={4/1}>
                <LineChart
                data={data}
                >
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                   {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </Cont>
    )
}

export default Chart
