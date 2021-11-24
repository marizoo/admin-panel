import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 4;
`

const Title = styled.span;
const Form = styled.form;
const Item = styled.div;
const Label = styled.label;
const InputFile = styled.input;
const InputText = styled.input;
const Select = styled.select;
const Option = styled.option;
const Button = styled.button;

const NewProduct = () => {
    return (
        <Cont>
            <Title>New Product</Title>
            <Form>
                <Item>
                    <Label>Image</Label>
                    <InputFile type="file" id="file"></InputFile>
                </Item>
                <Item>
                <Label>Name</Label>
                <InputText type="text" placeholder="Apple Airpods"/>
                </Item>
                <Item>
                <Label>Stock</Label>
                <InputText type="number" placeholder="152"/>
                </Item>
                <Item>
                <Label>Active</Label>
                <Select>
                    <Option value="yes">Yes</Option>
                    <Option value ="no">No</Option>
                </Select>
                </Item>
                <Button>Create</Button>
            </Form>
        </Cont>
    )
}

export default NewProduct

//THIS PAGE DOESNT WORK!!!
// Error: Objects are not valid as a React child (found: object with keys {$$typeof, render, attrs, componentStyle, shouldForwardProp, foldedComponentIds, styledComponentId, target, withComponent, warnTooManyClasses, toString}). If you meant to render a collection of children, use an array instead.