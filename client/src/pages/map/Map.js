import React from 'react'
import {Grid, Box} from '@mui/material'
import Map from '../../components/location/Map'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'
import {makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        marginLeft: '100px', marginTop: '100px',
        "@media (max-width: 1249px)": {
            marginLeft: '10px',
        },
        "@media (max-width: 920px)": {
           marginLeft: '2px',
           paddingLeft: '0px'
        },
    }
}))

const Location = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container >
                <Grid item xs={12}  style={{backgroundColor: '#F7F7F8'}} >
                    <Drawer/>
                        <Box className={classes.root}>
                            <Map />
                        </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Location
