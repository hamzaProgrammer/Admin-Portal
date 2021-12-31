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
import {getSingleCategories ,updateMyCategory} from '../../server_api/Api'
import axios from 'axios'
import {useEffect} from 'react'
import {useLocation , useParams} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '120px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginLeft: '38%',
        paddingLeft : '30px',
        width: '300px',
        marginBottom: '25px',
        "@media (max-width: 425px)": {
            marginLeft: '70px',
        },
        "@media (max-width: 375px)": {
            marginLeft: '50px',
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
        }
    },
    fileInput: {
    width: '200px',
    marginLeft: '10px',
    marginBottom: '50px',
    },
}))



const NewCategory = () => {
    const classes = useStyles();
    const location = useLocation();
    const {id} = useParams();
    console.log("ID : ", id)
    //const dispatch = useDispatch();
    const [ name , setname ] = useState('')
    const [MyImg, setImg] = useState('')
    const [myData , setmyData] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const {data} = await getSingleCategories(id);
            setmyData(data?.category)
        }
        getAll();
    },[])

    //console.log("Image : ", MyImg)
    const sendFile = (e) => {
        const data = new FormData();
        const file = e.target.files[0];
        data.append("cateImage", file); // <-- use "avatar" instead of "file" here
        data.append("name" , myData?.name)
        axios({
            method: 'put',
            url: 'https://new-mtechub-admin-panel-server.herokuapp.com/api/category/updateCategory',
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
                <Typography className={classes.head}>Update Category</Typography>
                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '0px'}}>Catgeory Name</Typography>
                            <TextField
                                id="standard-password-input"
                                value={myData?.name}
                                name="name"
                                onChange={(e) => setmyData({...myData , [e.target.name] : e.target.value})}
                                style={{width: '220px', marginTop: '-10px'}}
                                autoComplete="current-password"
                                variant="standard"
                            />
                             <img src={"/categories/" + myData.cateImage} alt=" no one" width="200" height="150" style={{marginLeft : '00px' , marginRight: '100px' , marginBottom : '50px' , marginTop : '50px'}} />

                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '0px'}}>Add Photo</Typography>
                            <input
                                onChange={(e) => sendFile(e)}
                                name="cateImage"
                                placeholder="Choose avatar"
                                type="file"
                            />

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default NewCategory