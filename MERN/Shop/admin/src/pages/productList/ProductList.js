import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';

import './productList.css';
import { productRows } from '../../dummyData';

export const ProductList = () => {
  const [data, setData] = useState(productRows)

  const handleDelete = id => setData(data.filter(item => item.id !== id))

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: params => (
        <div className='productListItem'>
          <img className='productListImg' src={params.row.img} alt='' />
          {params.row.name}
        </div>
      )
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 200
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => (
        <>
          <Link to={'/product/' + params.row.id}>
            <button className='productListEdit'>Edit</button>
          </Link>
          <DeleteOutline
            className='productListDelete'
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      )
    }
  ]

  const [pageSize, setPageSize] = useState(8);

  return (
    <div className='productList'>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        checkboxSelection
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        // onPageSizeChange={p => setPageSize(p)}
        rowsPerPageOptions={[3, 8, 15]}
      />
    </div>
  )
}
