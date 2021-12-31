import React from 'react'
import {Box , Button , Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #b2bec3',
        height: '60px',
        display: 'flex',
    },
    left: {
        display: 'flex'
    },
    text: {
        paddingTop: '18px',
        fontSize: '14px',
        fontWeight: 400,
        color: '#777777',
        fontFamily:'Roboto, Helvetica Neue, Arial, sans-serif',
        textAlign: 'center',
        verticalAlign : 'center'
    },
    btn : {
        color: '#636e72',
        textTransform : 'none'
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} >
                <Box className={classes.left}>
                    <Button variant="text" className={classes.btn} >Home</Button>
                    <Button variant="text" className={classes.btn} >Company</Button>
                    <Button variant="text" className={classes.btn} >Portfolio</Button>
                    <Button variant="text" className={classes.btn} >Blog</Button>
                </Box>
                <Box sx={{ flexGrow: 0.9 }} />
                <Box className={classes.left}>
                <Typography variant="text" className={classes.text} >
                    @2021 mtechub, made with love for better dev.
                </Typography>
                </Box>
            </Box>

        </>
    )
}

export default Footer
