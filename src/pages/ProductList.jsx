import React, {useState} from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../dummyData';
import { Link } from 'react-router-dom';


const Cont = styled.div`
flex: 4;
`

const productListStyle = {
    display:"flex",
    alignItem: "center",
  }
  
  const productImgStyle = {
    width:"32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
    marginTop: "10px",
  }
  
  const productBtnStyle = {
    border: "none",
    borderRadius:"10px",
    padding: "5px 10px",
    backgroundColor: "#3bb077",
    color: "white",
    cursor:"pointer",
    marginRight: "20px",
  }
  
  const productDelStyle = {
    color: "red",
    cursor: "pointer",
  }
  

const ProductList = () => {

    const[data,setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }


const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={productListStyle}>
            <img style={productImgStyle} src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/product/" + params.row.id}>
            <button style={productBtnStyle}>Edit</button>
          </Link>
            <DeleteOutline style={productDelStyle} onClick={() => handleDelete(params.row.id)}/>
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

export default ProductList
