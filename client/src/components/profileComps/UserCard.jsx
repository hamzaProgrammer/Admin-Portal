import React from 'react'
import {makeStyles} from '@mui/styles'
import {
    Box,
    Typography,
    Divider
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        marginLeft : '35px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderBottom: '1px solid #b2bec3',
        display: 'flex',
        flexDirection: 'column',
        "@media (max-width: 650px)": {
            marginTop: '20px',
            marginLeft: '5px',
        },
        "@media (max-width: 768px)": {
            marginLeft: '0px',
            marginTop: '20px'
        },
    },
    firstText : {
        fontSize : '15px',
        fontWeight: 300,
        color: '#333333',
        textAlign: 'center',
        paddingTop : '15px',
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
        "@media (max-width: 425px)": {
            fontSize: '24px',
        },
    },
    data : {
        display: 'flex',
        flexDirection : 'column',
        textAlign: 'center',
        paddingTop: '15px',
        justifyContent: 'space-between',
        paddingBottom : '5px',
        marginLeft : '25px',
        marginRight : '25px',
        marginBottom : '15px'
    },
    firstTextSec: {
        fontSize: '17px',
        fontWeight: 300,
        color: '#00b894',
        textAlign : 'center',
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
        "@media (max-width: 425px)": {
            fontSize: '30px',
        },
    },
    icons :{
        display :'flex',
        justifyContent : 'space-between',
        maxWidth :'150px',
        paddingLeft : '130px',
        paddingBottom :'10px',
        paddingTop: '10px',
        "@media (max-width: 1080px)": {
           paddingLeft: '80px',
        },
        "@media (max-width: 985px)": {
            paddingLeft: '70px',
        },
        "@media (max-width: 650px)": {
            paddingLeft: '200px',
        },
        "@media (max-width: 500px)": {
            paddingLeft: '150px',
        },
        "@media (max-width: 450px)": {
           paddingLeft: '120px',
        },
        "@media (max-width: 320px)": {
            paddingLeft: '50px',
        },
        "@media (max-width: 768px)": {
            paddingLeft: '280px',
        },
        "@media (max-width: 425px)": {
            paddingLeft: '400px',
        },
    },
    icon : {
        color: '#636e72',
        cursor : 'pointer',
        marginRight: '15px',
    },
    divider: {
        marginLeft: '15px',
        marginRight: '15px',
    },
    profilePic: {
        objectFit : 'cover' , borderRadius : '50%' , marginLeft : '120px' ,border: '3px solid white' , marginTop : '-50px',
        "@media (max-width: 1080px)": {
            marginLeft: '90px'
        },
        "@media (max-width: 1080px)": {
            marginLeft: '70px',
        },
        "@media (max-width: 650px)": {
            marginLeft: '200px',
        },
        "@media (max-width: 500px)": {
           marginLeft: '150px',
        },
        "@media (max-width: 450px)": {
            marginLeft: '120px',
        },
        "@media (max-width: 320px)": {
           marginLeft: '60px',
           height: '80px',
           width : '80px'
        },
        "@media (max-width: 768px)": {
            marginLeft: '280px',
            height: '100px',
            width : '100px'
        },
        "@media (max-width: 425px)": {
            marginLeft: '350px',
            height: '180px',
            width: '180px'
        },
    },
    text : {
        maxWidth: '300px', paddingLeft: '10px',
        "@media (max-width: 650px)": {
            paddingLeft: '80px',
            maxWidth: '400px',
        },
        "@media (max-width: 500px)": {
            paddingLeft: '00px',
            maxWidth: '500px',
        },
        "@media (max-width: 320px)": {
            paddingLeft: '0px',
            maxWidth: '200px',
            fontSize : '10px'
        },
        "@media (max-width: 768px)": {
            paddingLeft: '150px',
            maxWidth: '500px',
            fontSize : '13px'
        },
        "@media (max-width: 425px)": {
            paddingLeft: '250px',
            maxWidth: '650px',
            fontSize : '18px'
        },
    }
}))


const PieChartComp = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} >
                <img src="https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/photo-1431578500526-4d9613015464.0c528dc7.jpeg"  style={{objectFit : 'cover'}} alt="Cover" width="100%" height="120" />
                <img src="https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/face-3.62232de2.jpg" className={classes.profilePic} alt="Cover" width="110" height="110" />
                <Box className={classes.data} >
                    <Typography variant="text"  className={classes.firstTextSec}>Mike Andrew</Typography>
                    <Typography variant="text"  className={classes.firstText}>Micheal 24</Typography>
                    <Typography  variant = "text"
                        className = {
                            classes.firstText
                        } className={classes.text} > Lamborghini Mercy
                        Your chick she so thirsty
                        I 'm in that two seat Lambo
                    </Typography>
                </Box>
                <Divider className={classes.divider} />
                <Box className={classes.icons} >
                    <FacebookIcon className={classes.icon} />
                    <TwitterIcon    className={classes.icon} />
                    <MarkEmailUnreadIcon className={classes.icon} />
                </Box>
            </Box>

        </>
    )
}

export default PieChartComp