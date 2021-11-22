import React from 'react'
import styled from 'styled-components'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import WidgetLg from '../components/WidgetLg'
import WidgetSm from '../components/WidgetSm'
import {userData} from '../dummyData'

const Cont = styled.div`
flex: 4;
`

const HomeWidgets = styled.div`
display: flex;
margin: 20px;
`

const Home = () => {
    return (
        <Cont>
           <FeaturedInfo />
           <Chart data={userData} 
           title="User Analytics" 
           grid 
           dataKey="Active User"/>
           <HomeWidgets>
               <WidgetSm />
               <WidgetLg />
           </HomeWidgets>
        </Cont>
    )
}

export default Home
