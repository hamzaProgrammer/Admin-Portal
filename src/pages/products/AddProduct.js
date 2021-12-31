import React , { useState, useEffect} from 'react'
import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    TextareaAutosize,
    Grid
} from '@mui/material'
import { getCategories } from  '../../server_api/Api'
import {makeStyles} from '@mui/styles'
import {useNavigate , useLocation} from 'react-router-dom';
import axios from 'axios'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'


const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '100px',
        marginLeft : '150px',
        marginRight: '0px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        paddingLeft : '50px',
        backgroundColor: '#FAFAFA',
        maxWidth: '1000px',
        marginBottom: '25px',
        "@media (max-width: 1024px)": {
             marginLeft : '80px',
              marginRight: '20px',
              maxWidth : '800px',
              paddingLeft: '20px',
        },
        "@media (max-width: 768px)": {
            marginLeft: '50px',
            marginRight: '20px',
            maxWidth: '600px',
            paddingLeft: '20px',
        },
        "@media (max-width: 425px)": {
            marginLeft: '20px',
            paddingLeft : '20px'
        },
        "@media (max-width: 320px)": {
            marginLeft: '40px',
        },
    },
    head : {
        fontSize : '22px',
        fontWeight: 600,
        color: '#0abde3',
        marginBottom: '55px',
        "@media (max-width: 425px)": {
            textAlign : 'center',
             marginBottom: '0px',
        },
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        marginLeft : '00px',
        maxWidth : '1000px',
    },
    inputs : {
        width: '300px',
        marginBottom : '20px',
        "@media (max-width: 1024px)": {
            width: '220px',
        },
        "@media (max-width: 768px)": {
            width: '150px',
        },
        "@media (max-width: 425px)": {
           width: '300px',
        },
        "@media (max-width: 320px)": {
            width: '230px',
        },
    },
    fileInput: {
    width: '97%',
    marginLeft: '20px',
    marginBottom: '50px',
    },
    desc : {
        width : 300,
        marginTop: '-20px',
         "@media (max-width: 1024px)": {
            width : '200px',
         },
         "@media (max-width: 768px)": {
             width: '150px',
             marginLeft : '10px'
         },
        "@media (max-width: 425px)": {
             width: '300px',
        },
        "@media (max-width: 320px)": {
            width: '200px',
        },
    },
    btn : {
        maxWidth : '200px',
        marginTop: '120px',
        "@media (max-width: 1024px)": {
            width: '200px',
            fontSize: '13px',
        },
         "@media (max-width: 768px)": {
             width: '150px',
            fontSize: '10px',
         },
         "@media (max-width: 425px)": {
            minWidth: '300px',
            fontSize: '12px',
             marginTop: '40px',
         },
         "@media (max-width: 375px)": {
             minWidth: '300px',
             marginLeft : '-20px',
             fontSize: '12px',
             marginTop: '40px',
         },
         "@media (max-width: 320px)": {
             minWidth: '260px',
             marginLeft : '-40px',
             fontSize: '10px',
             marginTop: '40px',
         },
    },
    mainComp : {
        "@media (max-width: 1024px)": {
            maxWidth :  '100%'
        },
        "@media (max-width: 425px)": {
            display: 'flex',
            flexDirection :'column'
        },
    },
    role : {
        width: '300px',
        "@media (max-width: 1024px)": {
            width: '220px'
        },
        "@media (max-width: 768px)": {
            width: '150px',
        },
        "@media (max-width: 425px)": {
            width: '300px',
        },
        "@media (max-width: 320px)": {
            width: '230px',
        },
    },
}))


const NewProduct = () => {
    const classes = useStyles();
    const location = useLocation();

    const navigate = useNavigate();
    const initValue = {
        name: '',
        price: '',
        desc: '',
        category: '',
        prodImage: '',
    }

    const [ prodInfo , setProductInfo ] = useState(initValue)
    const [ categories , setCategories ] = useState({})

    const handleChange = (e) => {
        setProductInfo({...prodInfo , [e.target.name]: e.target.value})
    }



    // sending data to backend
    const sendFile = (e) => {
        const data = new FormData();
        const file = e.target.files[0];
        data.append("prodImage", file); // <-- use "avatar" instead of "file" here
        data.append("name" , prodInfo?.name)
        data.append("price" , prodInfo?.price)
        data.append("desc" , prodInfo?.desc)
        data.append("category" , prodInfo?.category)
        console.log("Prod Data : ", prodInfo , "Data : ", data)
        axios({
            method: 'post',
            url: 'https://new-mtechub-admin-panel-server.herokuapp.com/api/products/addNew',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        });
    };

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await getCategories();
            setCategories(data?.allCategories)
        }
        getUsers();
    }, [location])

    return (
        <>
            <Drawer/>
            <Box className={classes.root} >
                <Typography className={classes.head}>Add New Product</Typography>
                <Grid container className={classes.mainComp} >
                    <Grid item xs={4}>
                        <Grid container direction="column" className={classes.prodComps} >
                            <Grid item xs={4}>
                                <TextField
                                    label="Product Name"
                                    variant="outlined"
                                    className={classes.inputs}
                                    name="name"
                                    value={prodInfo.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Product Price"
                                    variant="outlined"
                                    className={classes.inputs}
                                    style={{maxWidth: '300px' , marginLeft: '0px'}}
                                    name="price"
                                    value={prodInfo.price}
                                    type="Number"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl required  className={classes.role}>
                                    <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={prodInfo.parentCate}
                                        label="Category"
                                        name="category"
                                        onChange={handleChange}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        Object.values(categories)?.map((item) => (
                                            <MenuItem  value={item?.name} key={item?._id} >{item?.name}</MenuItem>
                                        ))
                                    }
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid  item xs={4}>
                        <Grid container direction="column" className={classes.prodComps} >
                            <Grid item xs={4}>
                                <Box className={classes.fileInput}>
                                    <input
                                        onChange={(e) => sendFile(e)}
                                        name="prodImage"
                                        placeholder="Choose avatar"
                                        type="file"
                                    />
                                    <Button variant="contained" className={classes.btn}>Add Product Image and Uplaod Now </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container direction="row" className={classes.prodComps} style={{marginTop: '45px'}} >
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="Enter Product Description"
                                    minRows={8}
                                    className={classes.desc}
                                    name="desc"
                                    value={prodInfo.desc}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default NewProduct