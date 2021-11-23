import { LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report, } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Cont = styled.div`
flex: 1;
height: calc(100vh - 50px);
position: sticky;
top: 50;
background-color: #e2e2e2;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
color: #555;
`
const Menu = styled.div`
margin-bottom: 5px;
`


const Title = styled.h3`
font-size: 13px;
color: #a09f9f;
margin-bottom: 5px;
`


const List = styled.ul`
list-style: none;

`
const ListItem = styled.li`
padding: 5px;
cursor: pointer;
display: flex;
border-radius: 10px;

&.active,
&:hover {
background-color: #b4c4d8;
}

`
const linkStyle ={
    textDecoration: "none",
    color: "inherit",
}

const Sidebar = () => {
    return (
        <Cont>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <ListItem className="active">
                            <LineStyle style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Home
                        </ListItem>
                        <ListItem>
                            <Timeline style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Analytics
                        </ListItem>
                        <ListItem>
                            <TrendingUp style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Sales
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Quick Menu</Title>
                    <List>
                        <Link to="/users" style={linkStyle}>
                            <ListItem >
                                <PermIdentity style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                                Users
                            </ListItem>
                        </Link>
                        <Link to="/product" style={linkStyle}>
                            <ListItem>
                                <Storefront style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                                Products
                            </ListItem>
                        </Link>
                        <ListItem>
                            <AttachMoney style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Transactions
                        </ListItem>
                        <ListItem>
                            <BarChart style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Reports
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <List>
                        <ListItem >
                            <MailOutline style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Mail
                        </ListItem>
                        <ListItem>
                            <DynamicFeed style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Feedback
                        </ListItem>
                        <ListItem>
                            <ChatBubbleOutline style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Messages
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <ListItem >
                            <WorkOutline style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Manage
                        </ListItem>
                        <ListItem>
                            <Timeline style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Analytics
                        </ListItem>
                        <ListItem>
                            <Report style={{'marginRight':"5px", 'fontSize':"20px"}}/>
                            Reports
                        </ListItem>
                    </List>
                </Menu>
            </Wrapper>
        </Cont>
    )
}

export default Sidebar
