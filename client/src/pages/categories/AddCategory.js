import React , { useState } from 'react'
import {
    Box,
    Typography,
    Button,
    Grid
} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Navbar from '../../components/drawerSidebar/DrawerSidebar'
//import {addNewMyBrand} from '../../../actions/BrandsActions'
import TextField from '@mui/material/TextField';
//import {useDispatch } from 'react-redux'
import {createCategories} from '../../server_api/Api'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '120px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginLeft: '38%',
        paddingLeft : '30px',
        width: '300px',
        marginBottom: '25px',
        "@media (max-width: 1024px)": {
            marginLeft: '370px',
        },
        "@media (max-width: 768px)": {
            marginLeft: '230px',
        },
        "@media (max-width: 425px)": {
            marginLeft: '70px',
        },
        "@media (max-width: 375px)": {
            marginLeft: '20px',
        },
        "@media (max-width: 3720px)": {
            marginLeft: '20px',
            maxWidth : '270px',
            paddingLeft : '30px'
        },
    },
    head : {
        fontSize : '22px',
        fontWeight: 600,
        marginBottom: '55px',
        color: '#3c40c6',
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'row',
        marginTop: '30px'
    },
    inputs : {
        width: '320px',
        marginBottom : '20px'
    },
    uploadBtn: {
        color: '#fff',
        fontSize: '16px',
        width: '160px',
        marginLeft: '400px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    uploadBtn1: {
        color: '#fff',
        fontSize: '16px',
        width: '120px',
        marginLeft: '60px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        },
        "@media (max-width: 1024px)": {
            fontSize: '12px',
            width: '120px',
        },
    },
    fileInput: {
    width: '200px',
    marginLeft: '10px',
    marginBottom: '50px',
    },
}))



const NewProduct = () => {
    const classes = useStyles();
    //const dispatch = useDispatch();
    const [ name , setname ] = useState('')
    const [MyImg, setImg] = useState('')

    // for Sending Category Data to server
    const handleSubmit = async () => {
        if(!name){
                alert("!!!  Please Fill  required Field !!!")
        }else{
            try {
                //dispatch(addNewMyBrand({name}))
                //setname('')
                const {data} =await createCategories(name);
                console.log("Data : ", data)
            }catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    const sendFile = (e) => {
        const data = new FormData();
        const file = e.target.files[0];
        data.append("cateImage", file); // <-- use "avatar" instead of "file" here
        data.append("name" , name)
        axios({
            method: 'post',
            url: 'https://new-mtechub-admin-panel-server.herokuapp.com/api/category/addNew',
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
                <Typography className={classes.head}>Add New Catgeory</Typography>
                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '0px'}}>Category Name</Typography>
                            <TextField
                                id="standard-password-input"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                style={{width: '220px', marginTop: '-10px'}}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '0px' , marginTop: '25px'}}>Add Photo</Typography>
                            <input
                                onChange={(e) => sendFile(e)}
                                name="cateImage"
                                placeholder="Choose avatar"
                                type="file"
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Button variant="contained" type="file" className={classes.uploadBtn1} onClick={handleSubmit} >Add Now</Button>
            </Box>
        </>
    )
}

export default NewProduct