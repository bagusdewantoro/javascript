import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';

import './userList.css';
import { userRows } from '../../dummyData';

export const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = id => setData(data.filter(item => item.id !== id))

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: params => (
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt='' />
          {params.row.username}
        </div>
      )
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 200
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => (
        <>
          <Link to={'/user/' + params.row.id}>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutline
            className='userListDelete'
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      )
    }
  ]

  const [pageSize, setPageSize] = useState(8);

  return (
    <div className='userList'>
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
