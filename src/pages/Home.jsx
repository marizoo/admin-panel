import React from 'react'
import styled from 'styled-components'
import FeaturedInfo from '../components/FeaturedInfo'

const Cont = styled.div`
flex: 4;
`

const Home = () => {
    return (
        <Cont>
           <FeaturedInfo />
        </Cont>
    )
}

export default Home
