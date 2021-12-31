import React , {useState , useEffect}  from 'react'
import {
    Box,
    TextField,
    Button,
    Typography
} from '@mui/material'
import {useNavigate} from 'react-router-dom';
import {makeStyles} from '@mui/styles'
import  styled  from  'styled-components'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import {getSingleUser , updateUser} from '../../server_api/Api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import axios from 'axios'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '80px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginRight: '30px',
        marginLeft: '350px',
        paddingLeft : '30px',
        maxWidth: '700px',
        "@media (max-width: 1040px)": {
             marginLeft: '180px',
        },
         "@media (max-width: 768px)": {
             marginLeft: '20px',
         },
         "@media (max-width: 425px)": {
             marginLeft: '30px',
             minWidth : '350px',
             overFlowX : 'hidden'
         },
    },
    head : {
        fontSize : '17px',
        color: '#0abde3',
        fontWeight: 600,
        textAlign : 'center',
        "@media (max-width: 425px)": {
            fontSize: '18px',
        },
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        "@media (max-width: 425px)": {
            flexDirection : 'column'
        },
    },
    inputs : {
        width: '300px',
        marginTop : '20px',
        marginLeft: '20px',
        "@media (max-width: 425px)": {
            maxWidth: '250px',
            fontSize: '10px'
        },
    },
    uploadBtn: {
        color: '#fff',
        fontSize: '14px',
        backgroundColor: '#130f40',
        marginTop: '30px',
        textTransform: 'none',
        backgroundColor: '#182C61', fontWeight: 700, marginLeft: '270px', width: '150px',
        '&:hover': {
            backgroundColor: '#30336b'
        },
        "@media (max-width: 425px)": {
             marginLeft: '90px',
             fontSize : '12px',
             width : '150px',
             height:'30px'
        },
    },
    allInputs : {
        display: 'flex',
        "@media (max-width: 425px)": {
            flexDirection: 'column' 
        },
    },
    birth: {
        width : '300px',
        "@media (max-width: 425px)": {
            marginTop: '40px',
        },
    },
    img : {
        marginLeft: '50px', marginRight: '100px', marginBottom: '50px',
        "@media (max-width: 425px)": {
            marginRight: '0px',
            marginTop: '20px'
        },
    },
    newRole :{
        marginLeft: '40px', marginTop: '15px',
        width : '300px',
        "@media (max-width: 425px)": {
            marginLeft: '20px',
            maxWidth : '250px'
        },
    }
}))


const UpdateUsers = () => {
    const {id} = useParams();
    const [ userData , setUserData ] = useState({})

    useEffect(() => {
        const getUserInfo =  async () => {
            const {data} = await getSingleUser(id);
            setUserData(data?.user)
        }
        getUserInfo();
    }, [id])


    const classes = useStyles();
    const navigate = useNavigate();

    // sending data to backend
    const handleInfo = async (e) => {
            const {data} = await updateUser(userData);
             console.log("Data : ", data)
        //navigate('/signin')
    }

    const sendFile = (e) => {
            const data = new FormData();
            const file = e.target.files[0];
            data.append("avatar", file); // <-- use "avatar" instead of "file" here
            data.append("username" , userData?.username)
            data.append("email" , userData?.email)
            data.append("address" , userData?.address)
            data.append("role" , userData?.role)
            data.append("dateofBirth" , userData?.dateofBirth)
            axios({
                method: 'put',
                url: 'https://new-mtechub-admin-panel-server.herokuapp.com/api/users/updateUser',
                data: data,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            });
        };

    const [value, setValue] = React.useState(null);
    const [image , setimage ] = useState('')

    return (
        <>
            <Drawer/>
            <Box className={classes.root} >
                <Typography className={classes.head}>Update User Info</Typography>
                <Box className={classes.prodComps} >
                    <Box className={classes.allInputs}>
                        <TextField
                            id="outlined-password-input"
                            className={classes.inputs}
                            style={{marginBottom: '30px'}}
                            value={userData?.username}
                            name="username"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px', marginLeft : '20px'}}
                            name="email"
                            type="text"
                            value={userData?.email}
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                    </Box>
                    <Box className={classes.allInputs}>
                        <TextField
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px' , marginLeft : '20px'}}
                            value={userData?.address}
                            name="address"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                        <Box  className={classes.newRole}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={userData?.role}
                                label="Role"
                                name="role"
                                onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                                >
                                <MenuItem value={userData?.role} selected style={{backgroundColor :'#353b48' , color : '#FFFFFF'}} >{userData?.role}</MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="Customer">Customer</MenuItem>
                                <MenuItem value="Driver">Driver</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box className={classes.allInputs}>
                        <img src={"/users/" + userData.profilePic} alt=" no one" width="200" height="150" className={classes.img} />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Basic example"
                                className={classes.birth}
                                value={userData?.dateOfBirth}
                                name="dateOfBirth"
                                formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                                onChange={(newValue) => {
                                setValue(newValue);
                                setUserData({...userData , dateOfBirth: newValue})
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <input
                        onChange={(e) => sendFile(e)}
                        name="avatar"
                        className={classes.date} 
                        placeholder="Choose avatar"
                        type="file"
                    />
                    <Button variant="contained" type="submit" onClick={handleInfo}  className={classes.uploadBtn}  > Update User</Button>

                </Box>

            </Box>
        </>
    )
}

export default UpdateUsers
