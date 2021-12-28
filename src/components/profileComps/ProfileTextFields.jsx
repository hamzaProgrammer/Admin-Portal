import React from 'react'
import {makeStyles} from '@mui/styles'
import {
    Box,
    Typography,
    TextField,
    TextareaAutosize,
    Button
} from '@mui/material'


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        paddingTop: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderBottom: '1px solid #b2bec3',
        display: 'flex',
        flexDirection: 'column',
    },
    miniRoot : {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        paddingLeft : '20px',
        paddingRight: '20px',
        paddingTop: '15px',
        paddingBottom: '10px',
        justifyContent: 'space-between',
        "@media (max-width: 500px)": {
            flexDirection: 'column',
        },
        "@media (max-width: 320px)": {
            minHeight: '120px'
        },
    },
    firstText : {
        fontSize : '22px',
        fontWeight: 300,
        color: '#333333',
        paddingLeft: '15px',
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
        "@media (max-width: 425px)": {
            fontSize: '25px',
            marginLeft : '15px'
        },
        "@media (max-width: 320px)": {
            fontSize: '35px',
            marginLeft: '15px'
        },
        "@media (max-width: 320px)": {
            fontSize: '45px',
        },
      },
    subtext : {
        paddingLeft: '15px',
      fontSize: '14px',
      fontWeight: 400,
      color: '#9a9a9a',
      fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
      marginBottom: '40px'
    },
    disable : {
        color: '#353b48'
    },
    textFields : {
        width: '260px',
        "@media (max-width: 1313px)": {
            width: '220px',
        },
        "@media (max-width: 1080px)": {
            width: '180px',
        },
        "@media (max-width: 985px)": {
            width: '150px',
        },
        "@media (max-width: 500px)": {
            width: '350px',
            marginTop: '5px',
            marginBottom: '5px',
        },
        "@media (max-width: 450px)": {
            width: '270px',
        },
        "@media (max-width: 320px)": {
            width: '160px',
        },
        "@media (max-width: 425px)": {
            minWidth: '850px',
            height: '60px'
        },
        "@media (max-width: 320px)": {
            minWidth: '850px',
            minHeight: '60px'
        },
    },
    textFieldsSec: {
        width: '400px',
        "@media (max-width: 1313px)": {
            width: '350px',
        },
        "@media (max-width: 1080px)": {
            width: '280px',
        },
        "@media (max-width: 985px)": {
            width: '250px',
        },
        "@media (max-width: 500px)": {
            width: '350px',
            marginTop: '5px',
            marginBottom: '5px',
        },
         "@media (max-width: 450px)": {
            width: '270px',
        },
        "@media (max-width: 320px)": {
            width: '160px',
        },
        "@media (max-width: 425px)": {
            minWidth: '850px',
            height: '60px'
        },
        
    },
    textFieldThird : {
        width: '100%',
        "@media (max-width: 450px)": {
            width: '270px',
        },
        "@media (max-width: 320px)": {
            width: '160px',
        },
        "@media (max-width: 425px)": {
            minWidth: '850px',
            height: '60px'
        },
    },
    btnClass : {
        paddingLeft : '700px',
        paddingBottom : '20px',
        paddingTop: '30px',
        "@media (max-width: 1313px)": {
             paddingLeft: '650px',
        },
        "@media (max-width: 1080px)": {
            paddingLeft: '450px',
        },
        "@media (max-width: 985px)": {
             paddingLeft: '380px',
        },
        "@media (max-width: 500px)": {
           paddingLeft: '250px',
        },
        "@media (max-width: 450px)": {
            paddingLeft: '200px',
        },
        "@media (max-width: 320px)": {
            paddingLeft: '50px',
        },
        "@media (max-width: 1440px)": {
            paddingLeft: '750px',
        },
        "@media (max-width: 1024px)": {
            paddingLeft: '480px',
        },
        "@media (max-width: 425px)": {
            width: '200px',
            paddingLeft : '50px'
        },
        "@media (max-width: 1366px)": {
            minWidth: '350px',
            paddingLeft: '700px'
        },
    },
    btn : {
        backgroundColor: '#6c5ce7',
        textTransform :'none',
        fontWeight: 600,
        "@media (max-width: 320px)": {
            fontSize : '10px'
        },
        "@media (max-width: 425px)": {
            paddingLeft: '730px',
        },
        "@media (max-width: 425px)": {
            fontSize: '22px',
             paddingLeft: '30px',
             width: '800px'
        },
    },
    textArea : {
        width: '820px',
        "@media (max-width: 500px)": {
            width: '350px',
            marginLeft : '5px'
        },
        "@media (max-width: 450px)": {
            width: '270px',
            marginLeft: '5px'
        },
        "@media (max-width: 320px)": {
            width: '140px',
            maxHeight: '50px'
        },
        "@media (max-width: 1440px)": {
            width: '900px',
        },
        "@media (max-width: 425px)": {
            width: '850px',
        },
    }

}))


const PieChartComp = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} >
                <Typography variant="text"  className={classes.firstText}>Edit Profile</Typography>
                <Box className={classes.miniRoot} >
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Company"
                        defaultValue="MTecHub Pvt. Ltd"
                        variant="standard"
                        style={{width: '200px' , cursor :'no-drop' }}
                        InputProps={{
                            className:classes.disable
                        }}
                         size = "small"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="UserName"
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFields}
                        size="small"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFields}
                        size="small"
                    />
                </Box>

                <Box className={classes.miniRoot} >
                    <TextField
                        id="outlined-password-input"
                        label="First Name"
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFieldsSec}
                        size="small"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Last Name"
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFieldsSec}
                        size="small"
                    />
                </Box>

                <Box className={classes.miniRoot} >
                    <TextField
                        id="outlined-password-input"
                        label="Address  "
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFieldThird}
                        size="small"
                    />
                </Box>

                <Box className={classes.miniRoot} >
                    <TextField
                        id="outlined-password-input"
                        label="City"
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFields}
                        size="small"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Country"
                        type="text"
                        autoComplete="current-password"
                        className={classes.textFields}
                        size="small"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Postal Code"
                        type="Number"
                        autoComplete="current-password"
                        className={classes.textFields}
                        size="small"
                    />
                </Box>

                <Box className={classes.miniRoot} >
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder=" Complete Address ..."
                        className={classes.textArea}
                        disableelevation={true}
                    />
                </Box>

                <Box className={classes.btnClass} >
                    <Button variant="contained" className={classes.btn} >Update Profile</Button>
                </Box>
            </Box>

        </>
    )
}

export default PieChartComp