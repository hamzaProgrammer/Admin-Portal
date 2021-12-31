import React , {useState} from 'react'
import {
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material'
import {useNavigate} from 'react-router-dom';
import {makeStyles} from '@mui/styles'
import {signInUser} from '../../server_api/Api'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '70px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginRight: '30px',
        marginLeft: '350px',
        paddingLeft : '30px',
        maxWidth: '700px',
        "@media (max-width: 1024px)": {
            marginLeft: '150px',
        },
        "@media (max-width: 768px)": {
            marginLeft: '50px',
        },
    },
    head : {
        fontSize : '32px',
        textAlign : 'center',
        color: '#0984e3',
        fontWeight: 600,
        "@media (max-width: 425px)": {
            fontSize: '20px',
        },
        
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        //alignItems : 'center',
        justifyContent: 'space-around',
        marginLeft : '-30px'
    },
    inputs : {
        width: '270px',
        marginTop : '20px',
        marginLeft: '-20px',
        "@media (max-width: 425px)": {
            width: '290px',
            marginLeft: '30px',
            marginTop: '0px',
        },
        "@media (max-width: 375px)": {
            width: '250px',
            marginLeft: '30px',
            marginTop: '0px',
        },
        "@media (max-width: 320px)": {
            width: '220px',
            marginLeft: '10px',
            marginTop: '0px',
        },
    },
    uploadBtn: {
        color: '#fff',
        fontSize: '14px',
        width: '100px',
        marginLeft: '280px',
        backgroundColor: '#130f40',
        fontWeight: 600,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        },
        "@media (max-width: 425px)": {
            marginLeft: '120px',
        },
        "@media (max-width: 375px)": {
            marginLeft: '100px',
        },
        "@media (max-width: 320px)": {
            marginLeft: '70px',
        },
    },
    allInputs : {
        display: 'flex' , justifyContent: 'space-around',
        "@media (max-width: 425px)": {
            flexDirection :'column'
        },
    }
}))


const initValue = {
    email: '',
    password: '',
}

const SignIn = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [ userData , setUserData ] = useState(initValue)


    // sending data to backend
    const handleInfo = async () => {
        //dispatch(addNewUser(userData , dispatch))
        try{
            const {data} = await signInUser(userData);
            if(data?.message === "*** User Signed In SuccessFully ****"){
                localStorage.setItem("profile", JSON.stringify(data));
                navigate('/')
            }else{
                alert("**** user Credientials Do not Match ****")
            }
        }catch(e){
            console.log("eror is : ", e)
        }
    }

    return (
        <>
            <Box className={classes.root} >
                <Typography className={classes.head}>Admin Dashboard</Typography>
                <Box className={classes.prodComps} >
                    <Box className={classes.allInputs}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px'}}
                            name="email"
                            type="text"
                            value={userData?.email}
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px'}}
                            value={userData?.password}
                            type="password"
                            name="password"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                    </Box>

                    <Button variant="contained" type="file"  className={classes.uploadBtn} onClick={handleInfo} > Sign In</Button>
                </Box>

            </Box>
        </>
    )
}

export default SignIn