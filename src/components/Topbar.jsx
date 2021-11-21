import React from 'react'
import styled from 'styled-components'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

const Cont = styled.div`
width: 100vw;
height: 50px;
position: sticky;
top: 0;
z-index: 99;
`
const Wrapper = styled.div`
height: 100%;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.span`
font-weight: bold;
font-size: 30px;
cursor: pointer;
color: darkblue;
`

const Left = styled.div`
`

const Right = styled.div`
display: flex;
align-items: center;
margin-right: 10px;
`

const IconCont = styled.div`
display: flex;
position: relative;
font-size: 20px;
margin-right: 15px;
cursor: pointer;
color: #555;
`
const IconBadge = styled.span`
position: absolute;
top: -10px;
right: -7px;
border-radius: 50%;
width: 15px;
height: 15px;
color: white;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
font-weight: bold;
`

const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
background-color: yellow;
`


const Topbar = () => {
    return (
        <Cont>
            <Wrapper>
                <Left>
                    <Logo>Mazoo.</Logo>
                </Left>
                <Right>
                    <IconCont>
                        <NotificationsNone style={{fontSize:"inherit"}}/>
                        <IconBadge>2</IconBadge>
                    </IconCont>
                    <IconCont>
                        <Language style={{fontSize:"inherit"}}/>
                        <IconBadge>3</IconBadge>
                    </IconCont>
                    <IconCont>
                        <Settings />
                    </IconCont>
                    <Avatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="avatar"/>
                </Right>
            </Wrapper>
        </Cont>
    )
}

export default Topbar
