import React, {useState} from 'react'
import styled from 'styled-components'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';


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

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  };

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User name",
    width: 200,
    renderCell: (params) => {
      return (
        <div style={userStyle}>
          <img style={imgStyle} src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
        <Link to={"/user/" + params.row.id}>
          <button style={btnStyle}>Edit</button>
        </Link>
          <DeleteOutline style={delStyle} onClick={() => handleDelete(params.row.id)}/>
        </>
      );
    },
  },
];


    return (
        <Cont>
         <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
        </Cont>
    )
}

export default UserList
