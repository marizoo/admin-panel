import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Wrapper = styled.div`
flex: 1;
margin: 0 20px;
padding: 30px;
border-radius: 10px;
cursor: pointer;
box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`
const Item = styled.div``
const Title = styled.span`
font-size: 20px;
`

const MoneyCont = styled.div`
margin: 10px 0;
display: flex;
align-items: center;


`


const Money = styled.span`
font-weight: 600;
font-size: 30px;
`
const Rate = styled.span`
display: flex;
align-items: center;
margin-left: 20px;

&.featuredIcon{
    font-size: 14px;
    margin-left: 5px;
    color: green;
}
`


const Subtitle = styled.span``

const FeaturedInfo = () => {
    return (
        <Cont>
        <Wrapper>
            <Item>
                <Title>Revenue</Title>
                <MoneyCont>
                    <Money>$2,415-</Money>
                    <Rate>-11.4
                        <ArrowDownward
                        className="featuredIcon negative"
                        /> 
                        </Rate>
                </MoneyCont>
            </Item>
            <Subtitle>Compared to last month</Subtitle>
        </Wrapper>
        <Wrapper>
            <Item>
                <Title>Sales</Title>
                <MoneyCont>
                    <Money>$,415-</Money>
                    <Rate>-1.4<ArrowDownward className="featuredIcon negative"/> </Rate>
                </MoneyCont>
            </Item>
            <Subtitle>Compared to last month</Subtitle>
        </Wrapper>
        <Wrapper>
            <Item>
                <Title>Cost</Title>
                <MoneyCont>
                    <Money>$2,215-</Money>
                    <Rate>+2.7<ArrowUpward className="featuredIcon"/> </Rate>
                </MoneyCont>
            </Item>
            <Subtitle>Compared to last month</Subtitle>
        </Wrapper>
        </Cont>
    )
}

export default FeaturedInfo
