import React from 'react'
import {makeStyles} from '@mui/styles';
import {Box , Grid ,Typography , Button , Divider} from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import UpdateIcon from '@mui/icons-material/Update';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '5px',
        width: '260px',
        height: '142px',
        "@media (max-width: 1087px)": {
            width: '220px',
        },
        "@media (max-width: 920px)": {
            width: '180px',
        },
        "@media (max-width: 480px)": {
            width: '380px',
            marginBottom : '10px'
        },
        "@media (max-width: 380px)": {
            width: '500px',
        },
        "@media (max-width: 307px)": {
            width: '550px'
        },
        "@media (max-width: 2560px)": {
            width: '1800px',
            //backgroundColor: 'red'
        },
        "@media (max-width: 1440px)": {
            maxWidth: '250px',
        },
        "@media (max-width: 1024px)": {
            maxWidth: '240px',
        },
        "@media (max-width: 768px)": {
            maxWidth: '170px',
        },
        "@media (max-width: 425px)": {
            maxWidth: '350px',
        },
    },
    innerRoot: {
        maxWidth: '170px',
        marginLeft: '17px',
        paddingTop: '5px',
        height: '100px',
        backgroundColor: '#FFFFFF',
        "@media (max-width: 1087px)": {
            maxWidth: '100px',
            marginLeft: '10px',
        },
        "@media (max-width: 920px)": {
            maxWidth: '70px',
            marginLeft: '0px',
        },
        "@media (max-width: 480px)": {
           maxWidth: '380px',
            marginLeft: '0px',
        },
        "@media (max-width: 380px)": {
            maxWidth: '550px',
        },
        "@media (max-width: 307px)": {
            width: '550px'
        },
        "@media (max-width: 2560px)": {
            maxWidth: '350px',
            marginLeft : '0px'
            //backgroundColor : 'red'
       },
       "@media (max-width: 1440px)": {
           maxWidth: '300px',
           marginLeft: '0px',
           //backgroundColor : 'red'
       },
       "@media (max-width: 425px)": {
           maxWidth: '350px',
           marginLeft: '0px',
           //backgroundColor : 'red'
       },
    },
    icon : {
        fontSize: '50px',
        "@media (max-width: 1087px)": {
             fontSize: '40px',
        },
        "@media (max-width: 480px)": {
           fontSize: '50px',
        },
        "@media (max-width: 380px)": {
            fontSize: '60px',
            marginLeft : '30px'
        },
        "@media (max-width: 307px)": {
           fontSize: '70px',
            marginLeft : '30px'
        },
        "@media (max-width: 2560px)": {
            fontSize: '40px',
            marginLeft : '0px'
        },
        "@media (max-width: 425px)": {
            fontSize: '60px',
            marginLeft: '0px'
        },
    },
    gridItem : {
        paddingLeft: '5px',
        paddingTop: '10px'
    },
    rightGrid : {
        display: 'flex',
        flexDirection : 'column',
        paddingTop: '10px',
        paddingLeft: '35px',
        "@media (max-width: 1087px)": {
           paddingLeft: '25px',
        },
        "@media (max-width: 480px)": {
            paddingLeft: '75px',
        },
        "@media (max-width: 307px)": {
            paddingLeft: '100px',
        },
        "@media (max-width: 2560px)": {
            paddingLeft: '0px',
        },
        "@media (max-width: 1440px)": {
            paddingLeft: '0px',
        },
        "@media (max-width: 768px)": {
            paddingLeft: '0px',
        },
    },

    text : {
        color: '#636e72',
        fontSize: '12px',
        paddingLeft: '65px',
        "@media (max-width: 1087px)": {
            fontSize: '12px',
            paddingLeft: '55px',
        },
        "@media (max-width: 480px)": {
           fontSize: '13px',
        },
        "@media (max-width: 307px)": {
            fontSize: '16px',
        },
        "@media (max-width: 2560px)": {
            fontSize: '15px',
        },
        "@media (max-width: 768px)": {
            fontSize: '10px',
            paddingLeft : '-90px'
        },
        "@media (max-width: 425px)": {
            fontSize: '15px',
            paddingLeft: '100px'
        },

    },
    boldText : {
        color: '#2d3436',
        fontSize: '22px',
        fontWeight: 600,
        paddingLeft: '45px',
        "@media (max-width: 1087px)": {
            fontSize: '18px',
            paddingLeft: '45px',
        },
        "@media (max-width: 480px)": {
            fontSize: '20px',
            paddingLeft: '45px', 
        },
        "@media (max-width: 307px)": {
            fontSize: '30px',
            paddingLeft: '45px',
        },
        "@media (max-width: 2560px)": {
            fontSize: '20px',
            paddingLeft: '25px',
        },
        "@media (max-width: 1440px)": {
            fontSize: '18px',
            paddingLeft: '60px',
        },
        "@media (max-width: 768px)": {
            fontSize: '13px',
            paddingLeft: '40px',
        },
        "@media (max-width: 425px)": {
            fontSize: '18px',
            paddingLeft: '100px',
        },
    },
    btn : {
        color: '#636e72',
        paddingTop: '10px',
        textTransform: 'none',
        "@media (max-width: 260px)": {
            fontSize: '20px'
        },
    },
    iconNew: {
        color: '#636e72',
        marginLeft: '15px',
        "@media (max-width: 2560px)": {
            fontSize: '30px',
        },
    },
    divider : {
        marginLeft : '15px',
        marginRight: '15px',
    },
    box : {
        "@media (max-width: 2560px)": {
            maxWidth : '1500px',
            backgroundColor: 'blue'
        },
    }
}))

const MainPageComp = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} >
                    <Box className={classes.box} >
                <Grid container className={classes.innerRoot} >
                        <Grid item xs={6} className={classes.gridItem} >
                            <MonetizationOnIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs={6}>
                            <Box className={classes.rightGrid} >
                                <Typography className={classes.text} >Number</Typography>
                                <Typography className={classes.boldText} >150GB</Typography>
                            </Box>
                        </Grid>
                </Grid>
                    </Box>
                    <Divider className={classes.divider} />
                    <Button  variant = "text"
                    startIcon = {
                        <UpdateIcon className={classes.iconNew} />
                    }  className={classes.btn}>
                         Update Now
                    </Button>
            </Box>
        </>
    )
}

export default MainPageComp
