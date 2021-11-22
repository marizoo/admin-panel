import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 2;
box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
`

const Title = styled.h3`
font-size: 22px;
font-weight: 600;
`


const Table = styled.table``
const TableRow = styled.tr``
const TableHead = styled.th``
const TdUser = styled.td``
const TdDate = styled.td``
const TdAmount = styled.td``
const TdStatus = styled.td``
const Img = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
` 

const Name = styled.span`` 
const Button = styled.button`
padding: 5px 7px;
border: none;
border-radius: 10px;
background-color: 
${(props) => props.type === "Approved" ? "#e5faf2" : 
props.type === "Declined" ? "#fff0f1" :
"#ebf1fe"
};
color:
${(props) => props.type === "Approved" ? "#3bb077" :
props.type === "Declined" ? "#d95087" :
"#2a7ade"
}
`

const WidgetLg = () => {

    const RowButton = ({type}) => {
        return <Button type={type}>{type}</Button>
    }

    return (
        <Cont>
            <Title>Latest transactions</Title>
            <Table>
                <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
                <TableRow>
                    <TdUser>
                        <Img  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <Name>Susan Carol</Name>
                    </TdUser>
                    <TdDate>
                        2 Jun 2021
                    </TdDate>
                    <TdAmount>
                        $122.00
                    </TdAmount>
                    <TdStatus>
                        <RowButton type="Approved" />
                    </TdStatus>
                </TableRow>
                {/* ANOTHER ROW */}
                <TableRow>
                    <TdUser>
                        <Img  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <Name>Susan Carol</Name>
                    </TdUser>
                    <TdDate>
                        2 Jun 2021
                    </TdDate>
                    <TdAmount>
                        $122.00
                    </TdAmount>
                    <TdStatus>
                        <RowButton type="Declined" />
                    </TdStatus>
                </TableRow>
                {/* ANOTHER ROW */}
                <TableRow>
                    <TdUser>
                        <Img  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <Name>Susan Carol</Name>
                    </TdUser>
                    <TdDate>
                        2 Jun 2021
                    </TdDate>
                    <TdAmount>
                        $122.00
                    </TdAmount>
                    <TdStatus>
                        <RowButton type="Pending" />
                    </TdStatus>
                </TableRow>
                {/* ANOTHER ROW */}
            </Table>
        </Cont>
    )
}

export default WidgetLg
