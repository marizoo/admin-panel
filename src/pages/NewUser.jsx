import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 4;
margin-left: 20px;
`

const Title = styled.div``
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Item = styled.div`
width: 400px;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 20px;
`

const Label = styled.label`
margin-bottom: 10px;
font-size: 14px;
font-weight: 600;
color: #adacac;
`

const NewUserGender = styled.div``

const Input = styled.input`
height: 20px;
padding: 10px;
border: 1px solid gray;
border-radius: 5px;
`

const LabelRadio = styled.label`
margin: 10px;
font-size: 18px;
color: #555;
`
const InputRadio = styled.input`
margin-top: 15px;
`

const Select = styled.select`
height: 40px;
border-radius: 5px;
`

const Option = styled.option``
const Button = styled.button`
width: 200px;
border:none;
background-color: darkblue;
color: white;
padding: 7px 10px; 
font-weight: 600;
border-radius: 10px;
margin-top: 30px;
cursor: pointer;
`


const NewUser = () => {
    return (
        <Cont>
            <Title>New User</Title>
            <Form>
                <Item>
                    <Label>Username</Label>
                    <Input type="text" placeholder="john" />
                </Item>
                <Item>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="John Smith" />
                </Item>
                <Item>
                    <Label>Email</Label>
                    <Input type="email" placeholder="John@woofy.com" />
                </Item>
                <Item>
                    <Label>Password</Label>
                    <Input type="password" placeholder="password" />
                </Item>
                <Item>
                    <Label>Phone</Label>
                    <Input type="number" placeholder="+1 389 4652 0784" />
                </Item>
                <Item>
                    <Label>Address</Label>
                    <Input type="text" placeholder="New York | USA" />
                </Item>
                <Item>
                    <Label>Gender</Label>
                    <NewUserGender>
                        <InputRadio type="radio" name="gender" id="male" value="male"/>
                        <LabelRadio for="male">Male</LabelRadio>
                        <InputRadio type="radio" name="gender" id="female" value="female"/>
                        <LabelRadio for="female">Female</LabelRadio>
                        <InputRadio type="radio" name="gender" id="others" value="others"/>
                        <LabelRadio for="others">Others</LabelRadio>
                    </NewUserGender>
                </Item>
                <Item>
                    <Label>Active</Label>
                    <Select name="active" id="active">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </Item>
                <Button>Create</Button>
            </Form>
        </Cont>
    )
}

export default NewUser
