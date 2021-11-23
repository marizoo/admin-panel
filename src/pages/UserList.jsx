import React from 'react'
import styled from 'styled-components'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';


const Cont = styled.div`
flex: 4;
`

const userStyle = {
  display:"flex",
  alignItem:"center,"
}

const imgStyle = {
  width:"32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "10px",
}

const btnStyle = {
  border: "none",
  borderRadius:"10px",
  padding: "5px 10px",
  backgroundColor: "#3bb077",
  color: "white",
  cursor:"pointer",
  marginRight: "20px",
}

const delStyle = {
  color: "red",
  cursor: "pointer",
}

const UserList = () => {


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User name', width: 200,
          renderCell: (params) => {
            return(
              <div style={userStyle}>
                <img style={imgStyle} src={params.row.avatar} alt=""/>
                {params.row.username}
              </div>
            )
          }
      },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
          field: "action",
          headerName:"Action",
          width: 150,
          renderCell: (params) => {
            return(
              <>
                <button style={btnStyle}>Edit</button>
                <DeleteOutline style={delStyle}/>
              </>
            )
          }

        }
        
      ];
      
      const rows = [
        { id: 1, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 2, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 3, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 4, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 5, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 6, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 7, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 8, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 9, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { id: 10, 
          username: 'Jon Snow', 
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
          avatar: "https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
       
      ];

    return (
        <Cont>
         <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
        </Cont>
    )
}

export default UserList
