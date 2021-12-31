import {Link} from 'react-router-dom';



// users columns
const UsersColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
    {
        field: 'username',
        headerName: 'Name',
        width: 250,
      renderCell: (params) => {
            return (
                <>
                <Link Link to = {
                  `/admin/users/upadateUser/${params.row._id}`
                }
                style = {
                  {
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#192a56'
                  }
                } >
                    <h5 onClick={(e)=>console.log("User Clicked")} >{params.row.username}</h5>
                    <img src={"/users/" + params.row.profilePic } style={{objectFit: 'cover'  , width: '55px' , height: '55px',borderRadius : '50%' , marginLeft : '20px'}} alt="no one" />
                </Link>
                </>
            )
        }
    },
    {
        field: 'phoneNo',
        headerName: 'Phone No.',
        width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 150,
    },
    {
      field: 'phoneNo',
      headerName: 'Phone No.',
      width: 150,
    },
    // {
    //     field: 'action',
    //     headerName: 'Action',
    //     width: 250,
    //     renderCell: (params) => {
    //         return (
    //             <>
    //                 <Button  variant = "contained"
    //                 color = "primary"
    //                 size = "small"
    //                 component={Link}
    //                 style={{backgroundColor: '#2980b9'}}
    //                 to={`/admin/addCategory?id=${params.row._id}`}
    //                 >
    //                     Edit
    //                 </Button>
    //                 <DeleteIcon
    //                     className={classes.deleteBtn}
    //                     onClick= { () => dispatch(deletingCategory(params.row._id))}
    //                 />
    //             </>
    //         )
    //     }
    // }
];




// users columns
const categoriesColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
    {
        field: 'username',
        headerName: 'Name',
        width: 250,
      renderCell: (params) => {
            return (
                <>
                <Link Link to = {
                  `/admin/categories/upadateCategory/${params.row._id}`
                }
                style = {
                  {
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#192a56'
                  }
                } >
                    <h5 onClick={(e)=>console.log("User Clicked")} >{params.row.name}</h5>
                </Link>
                </>
            )
        }
    },
     {
        field: 'cateImage',
        headerName: 'Category photo',
        width: 350,
        height: '150px',
      renderCell: (params) => {
            return (
                <>
                <Link Link to = {
                  `/admin/categories/upadateCategory/${params.row._id}`
                }
                style = {
                  {
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#192a56'
                  }
                } >
                    <img src={"/categories/" + params.row.cateImage } style={{objectFit: 'cover'  , width: '55px' , height: '55px',borderRadius : '50%' , marginLeft : '20px'}} alt="no one" />
                </Link>
                </>
            )
        }
    },
    // {
    //     field: 'action',
    //     headerName: 'Action',
    //     width: 250,
    //     renderCell: (params) => {
    //         return (
    //             <>
    //                 <Button  variant = "contained"
    //                 color = "primary"
    //                 size = "small"
    //                 component={Link}
    //                 style={{backgroundColor: '#2980b9'}}
    //                 to={`/admin/addCategory?id=${params.row._id}`}
    //                 >
    //                     Edit
    //                 </Button>
    //                 <DeleteIcon
    //                     className={classes.deleteBtn}
    //                     onClick= { () => dispatch(deletingCategory(params.row._id))}
    //                 />
    //             </>
    //         )
    //     }
    // }
];



// users columns
const productsColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
    {
        field: 'name',
        headerName: 'Name',
        width: 350,
      renderCell: (params) => {
            return (
                <>
                <Link Link to = {
                  `/admin/products/upadateProduct/${params.row.name}`
                }
                style = {
                  {
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#192a56'
                  }
                } >
                    <h5 onClick={(e)=>console.log("User Clicked")} >{params.row.name}</h5>
                    <img src={"/products/" + params.row.productImg } style={{objectFit: 'cover'  , width: '55px' , height: '55px',borderRadius : '50%' , marginLeft : '20px'}} alt="no one" />
                </Link>
                </>
            )
        }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 200,
    },
    // {
    //     field: 'action',
    //     headerName: 'Action',
    //     width: 250,
    //     renderCell: (params) => {
    //         return (
    //             <>
    //                 <Button  variant = "contained"
    //                 color = "primary"
    //                 size = "small"
    //                 component={Link}
    //                 style={{backgroundColor: '#2980b9'}}
    //                 to={`/admin/addCategory?id=${params.row._id}`}
    //                 >
    //                     Edit
    //                 </Button>
    //                 <DeleteIcon
    //                     className={classes.deleteBtn}
    //                     onClick= { () => dispatch(deletingCategory(params.row._id))}
    //                 />
    //             </>
    //         )
    //     }
    // }
];


export {
  UsersColumns,
  categoriesColumns,
  productsColumns
}