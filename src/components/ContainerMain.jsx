import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
margin-top: 10px;
`

const ContainerMain = ({children}) => {
    return (
        <Cont>
            {children}
        </Cont>
    )
}

export default ContainerMain
