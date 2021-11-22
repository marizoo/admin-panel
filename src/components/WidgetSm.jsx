import { Visibility } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 1;
box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
margin-right: 20px;
`

const Title = styled.span`
font-size: 22px;
font-weight: 600;
`


const List = styled.ul`
list-style: none;
`
const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;
`

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`
const User = styled.div`
display: flex;
flex-direction: column;
`

const UserName = styled.span`
font-weight: 600;
`

const UserTitle = styled.span`
font-weight: 300;
`

const Button = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding: 7px 10px;
background-color: #eeeef7;
color: #555;
cursor: pointer;
`

let IconSm = {
    fontSize : "16px",
    marginRight : "5px",
}

const WidgetSm = () => {
    return (
        <Cont>
            <Title>New Join Members</Title>
            <List>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <User>
                        <UserName>Anna Keller</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <Button>
                        <Visibility style={IconSm}/>
                        Display
                    </Button>
                </ListItem>
            </List>
            {/* ANOTHER USER */}
            <List>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <User>
                        <UserName>Anna Keller</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <Button>
                        <Visibility style={IconSm}/>
                        Display
                    </Button>
                </ListItem>
            </List>
            {/* ANOTHER USER */}
            <List>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <User>
                        <UserName>Anna Keller</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <Button>
                        <Visibility style={IconSm}/>
                        Display
                    </Button>
                </ListItem>
            </List>
            {/* ANOTHER USER */}
            <List>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <User>
                        <UserName>Anna Keller</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <Button>
                        <Visibility style={IconSm}/>
                        Display
                    </Button>
                </ListItem>
            </List>
            {/* ANOTHER USER */}
            <List>
                <ListItem>
                    <Image src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <User>
                        <UserName>Anna Keller</UserName>
                        <UserTitle>Software Engineer</UserTitle>
                    </User>
                    <Button>
                        <Visibility style={IconSm}/>
                        Display
                    </Button>
                </ListItem>
            </List>
            {/* ANOTHER USER */}
        </Cont>
    )
}

export default WidgetSm
