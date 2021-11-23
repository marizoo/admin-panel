import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 4;
padding: 20px;
`

const TitleCont = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Title = styled.h1``
const AddButton = styled.button`
width: 80px;
border: none;
padding: 5px;
background-color: teal;
border-radius: 5px;
cursor: pointer;
color: white;
font-size: 16px;
`

const UserCont = styled.div`
display: flex;
margin-top: 20px;
`
const UserShow = styled.div`
flex: 1;
padding: 20px;
box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`

const UserTop = styled.div`
display: flex;
align-items: center;
`

const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`

const UserTopTitle = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`

const UserName = styled.span`
font-weight: 600;
`
const UserTitle = styled.span`
font-weight: 300;
`

const UserBottom = styled.div`
margin-top: 20px;
`

const UserBottomTitle = styled.span`
font-size: 14px;
font-weight: 600;
color: #a3a3a3;
`
const UserShowInfo = styled.div`
display: flex;
align-items: center;
margin: 20px 0;
color: #444;
`

const USTitle = styled.span`
margin-left: 10px;
`

const userShowIcon = {
fontSize:"16px",
}

const UserUpdate = styled.div`
flex: 2;
padding: 20px;
box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
margin-left: 20px;
`
    


const User = () => {
    return (
        <Cont>
            <TitleCont>
                <Title>Edit User</Title>
                <AddButton>Create</AddButton>
            </TitleCont>
            <UserCont>
                <UserShow>
                    <UserTop>
                        <UserImg src="https://images.pexels.com/photos/4611972/pexels-photo-4611972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                        <UserTopTitle>
                            <UserName>Anna Becker</UserName>
                            <UserTitle>Software Engineer</UserTitle>
                        </UserTopTitle>
                    </UserTop>
                    <UserBottom>
                        <UserBottomTitle>Account Details</UserBottomTitle>
                        {/* USERS */}
                        <UserShowInfo>
                            <PermIdentity style={userShowIcon}/>
                            <USTitle>annabeck99</USTitle>
                        </UserShowInfo>
                        {/* USERS */}
                        <UserShowInfo>
                            <CalendarToday style={userShowIcon}/>
                            <USTitle>10.12.1998</USTitle>
                        </UserShowInfo>
                        {/* USERS */}
                        <UserBottomTitle>Contact Details</UserBottomTitle>
                        <UserShowInfo>
                            <PhoneAndroid style={userShowIcon}/>
                            <USTitle>+1 827 5674 1982</USTitle>
                        </UserShowInfo>
                        {/* USERS */}
                        <UserShowInfo>
                            <MailOutline style={userShowIcon}/>
                            <USTitle>beckanna98@gmail.com</USTitle>
                        </UserShowInfo>
                        {/* USERS */}
                        <UserShowInfo>
                            <LocationSearching style={userShowIcon}/>
                            <USTitle>164 Wild Open Spaces. Dixie Chix | USA.</USTitle>
                        </UserShowInfo>
                        {/* USERS */}
                        <UserShowInfo>
                            <PermIdentity style={userShowIcon}/>
                            <USTitle>annabeck99</USTitle>
                        </UserShowInfo>
                        {/* USERS */}
                        
                        
                    </UserBottom>
                </UserShow>

                <UserUpdate>u</UserUpdate>
            </UserCont>
        </Cont>
    )
}

export default User
