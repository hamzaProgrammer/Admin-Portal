import React , { useState } from 'react'
import Navbar from '../../components/drawerSidebar/DrawerSidebar'
//import {addNewMyBrand} from '../../../actions/BrandsActions'
//import {useDispatch } from 'react-redux'
import axios from 'axios'
import {useEffect} from 'react'
import {useLocation , useParams} from 'react-router-dom'

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
import { singleProduct , getCategories , updateProduct} from  '../../server_api/Api'
import {makeStyles} from '@mui/styles'
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
        marginLeft: '150px',
        marginRight: '0px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        paddingLeft: '50px',
        backgroundColor: '#FAFAFA',
        maxWidth: '1000px',
        marginBottom: '25px',
        "@media (max-width: 1024px)": {
            marginLeft: '80px',
            marginRight: '20px',
            maxWidth: '800px',
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
            paddingLeft: '20px'
        },
        "@media (max-width: 320px)": {
            marginLeft: '40px',
        },
    },
    head: {
        fontSize: '22px',
        fontWeight: 600,
        color: '#0abde3',
        marginBottom: '55px',
        "@media (max-width: 425px)": {
            textAlign: 'center',
            marginBottom: '0px',
        },
    },
    prodComps: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        marginLeft: '00px',
        maxWidth: '1000px',
    },
    inputs: {
        width: '300px',
        marginBottom: '20px',
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
    desc: {
        width: 300,
        marginTop: '-20px',
        "@media (max-width: 1024px)": {
            width: '200px',
        },
        "@media (max-width: 768px)": {
            width: '150px',
            marginLeft: '10px'
        },
        "@media (max-width: 425px)": {
            width: '290px',
        },
        "@media (max-width: 320px)": {
            width: '200px',
        },
    },
    btn: {
        maxWidth: '200px',
        marginTop: '120px',
        "@media (max-width: 1024px)": {
            width: '200px',
            fontSize: '13px',
        },
        "@media (max-width: 1366px)": {
            width: '300px',
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
            marginLeft: '-20px',
            fontSize: '12px',
            marginTop: '40px',
        },
        "@media (max-width: 320px)": {
            minWidth: '260px',
            marginLeft: '-40px',
            fontSize: '10px',
            marginTop: '40px',
        },
    },
    mainComp: {
        "@media (max-width: 1024px)": {
            maxWidth: '100%'
        },
        "@media (max-width: 425px)": {
            display: 'flex',
            flexDirection: 'column'
        },
    },
    role: {
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
    subBtn :{
        marginLeft : '380px',
        backgroundColor: '#130f40',
        "@media (max-width: 1024px)": {
            marginLeft: '300px',
        },
        "@media (max-width: 768px)": {
            marginLeft: '230px',
        },
        "@media (max-width: 425px)": {
            marginLeft: '0px',
            width : '350px',
            marginTop: '15px',
            fontWeight: 600
        },
        "@media (max-width: 375px)": {
            marginLeft: '10px',
            width: '290px',
             marginTop: '15px',
        },
        "@media (max-width: 320px)": {
            marginLeft: '10px',
            width: '200px',
            marginTop: '15px',
            fontSize : '12px'
        },
    }
}))


const UpdateProd = () => {
    const classes = useStyles();
    const location = useLocation();
    const {name} = useParams();

    const [prodInfo , setProductInfo] = useState([])
    const [ categories , setCategories ] = useState({})


    useEffect(() => {
        const getMyCategories = async () => {
            const { data } = await getCategories();
            setCategories(data?.allCategories)
            console.log("Cate " , data?.allCategories)
        }
        getMyCategories();
    }, [])

    useEffect(() => {
        const getProd = async () => {
            const {data} = await singleProduct(name);
            setProductInfo(data?.product[0])
            //console.log("Infp : " , data)
        }
        getProd();
    },[])

    const handleChange = (e) => {
        setProductInfo({...prodInfo , [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        const {data} = await updateProduct(prodInfo);
        console.log("Data : ", data)
    }

    //console.log("Image : ", MyImg)
    const sendFile = (e) => {
        const data = new FormData();
        const file = e.target.files[0];
        data.append("prodImage", file); // <-- use "avatar" instead of "file" here
        //data.append("name" , prodInfo?.name)
        data.append("name" , prodInfo?.name)
        data.append("price" , prodInfo?.price)
        data.append("desc" , prodInfo?.desc)
        data.append("category" , prodInfo?.category)
        axios({
            method: 'put',
            url: 'https://new-mtechub-admin-panel-server.herokuapp.com/api/products/updateProduct',
            data: data,
            config: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        });
    };

    return (
        <>
            <Navbar/>
            <Box className={classes.root} >
                <Typography className={classes.head}>Update ({name})</Typography>
                    <Grid container className={classes.mainComp} >
                        <Grid item xs={4}>
                            <Grid container direction="row" className={classes.prodComps} >
                                <Grid item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        className={classes.inputs}
                                        name="name"
                                        value={prodInfo.name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
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
                                    <FormControl  required className = {
                                        classes.role
                                    } >
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
                        <Grid item xs={4}>
                            <Grid container direction="row" className={classes.prodComps} >
                                <Grid item xs={4}>
                                {/* <img src={"/products/" + prodInfo.productImg} alt=" no one" width="200" height="150" style={{marginLeft : '00px' , marginRight: '100px' , marginBottom : '50px' , marginTop : '50px'}} /> */}
                                    <Box className={classes.fileInput}>
                                        <input
                                            onChange={(e) => sendFile(e)}
                                            name="prodImage"
                                            placeholder="Choose avatar"
                                            type="file"
                                        />
                                        <Button variant="contained"  className={classes.btn}>Add Product Image and Uplaod Now </Button>
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
                <Button onClick={handleSubmit} variant="contained" className={classes.subBtn}>Update Info</Button>
            </Box>
        </>
    )
}

export default UpdateProd