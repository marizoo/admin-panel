import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Chart from '../components/Chart'
import { productData } from '../dummyData'

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
color: white;
 border-radius: 5px;
 font-size: 16px;
 cursor: pointer;
`
const ProductTop = styled.div`
display: flex;
width: 100%;
`

const TopLeft = styled.div`
flex: 1;
width: 50%;
`

const TopRight = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
box-shadow:0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow:0 0 15px -10px rgba(0, 0, 0, 0.75);
`

const InfoTop = styled.div`
display: flex;
align-items: center;
`

const ProductInfoImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`
const ProductName = styled.span`
font-weight: 600;
`
const InfoBottom = styled.div`
margin-top: 10px;
`
const InfoItem = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
`

const InfoKey= styled.span``
const InfoValue= styled.span`
font-weight: 300;
`

const ProductBottom = styled.div`

padding: 20px;
margin: 20px;
box-shadow:0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow:0 0 15px -10px rgba(0, 0, 0, 0.75);
`

const Form = styled.form`
display: flex;
justify-content: space-between;
`

const FormLeft = styled.div`
display: flex;
flex-direction: column;
`

const Label = styled.label`
margin-bottom: 10px;
color: gray;
`

const Input = styled.input`
margin-bottom: 10px;
border: none;
padding: 5px;
border-bottom: 1px solid gray;
`

const Select = styled.select`
margin-bottom: 10px;
`

const Option = styled.option``
const FormRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`

const Upload = styled.div`
display: flex;
align-items: center;
`
const UpImg = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`
const InputFile = styled.input`
display: none;
`
const Button = styled.button`
border: none;
padding: 5px;
border-radius: 5px;
background-color: darkblue;
color: white;
font-weight: bold;
cursor: pointer;
`



const Product = () => {
    return (
        <Cont>
            <TitleCont>
                    <Title>Product</Title>
                <Link to="/newproduct">
                    <AddButton>Create</AddButton>
                </Link>
            </TitleCont>
            <ProductTop>
                <TopLeft>
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </TopLeft>
                <TopRight>
                    <InfoTop>
                        <ProductInfoImg src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <ProductName>Natural Oil</ProductName>
                    </InfoTop>

                    <InfoBottom>
                        {/* Items */}
                        <InfoItem>
                            <InfoKey>id:</InfoKey>
                            <InfoValue>123</InfoValue>
                        </InfoItem>
                        {/* Items */}
                        <InfoItem>
                            <InfoKey>sales:</InfoKey>
                            <InfoValue>5274</InfoValue>
                        </InfoItem>
                        {/* Items */}
                        <InfoItem>
                            <InfoKey>active:</InfoKey>
                            <InfoValue>yes</InfoValue>
                        </InfoItem>
                        {/* Items */}
                        <InfoItem>
                            <InfoKey>in stock:</InfoKey>
                            <InfoValue>no</InfoValue>
                        </InfoItem>
                        {/* Items */}
                    </InfoBottom>
                </TopRight>
            </ProductTop>

            <ProductBottom>
                <Form>
                    <FormLeft>
                        <Label>Product Name</Label>
                        <Input type="text" placeholder="Apple Airpod"/>
                        <Label>In Stock</Label>
                        <Select name="inStock" id="inStock">
                            <Option value="yes">Yes</Option>
                            <Option value="no">No</Option>
                        </Select>
                        <Label>Active</Label>
                        <Select name="active" id="active">
                            <Option value="yes">Yes</Option>
                            <Option value="no">No</Option>
                        </Select>
                    </FormLeft>

                    <FormRight>
                        <Upload>
                            <UpImg src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                            <Label for="file">
                                <Publish/>
                            </Label>
                            <InputFile type="file" id="file"/>
                        </Upload>
                        <Button>Update</Button>
                    </FormRight>
                </Form>
            </ProductBottom>
        </Cont>
    )
}

export default Product
