import React from 'react'
import {Grid} from '@mui/material'
import Footer from '../../components/footer/Footer'
import Tables from '../../components/dataTables/Table'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'
import {makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    root : {
        backgroundColor: '#F7F7F8',
        marginTop: '80px'
    }
}))

const DataTables = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} >
                <Grid item xs={12}  >
                    <Drawer/>
                    <Tables />
                    <Footer />
                </Grid>
            </Grid>
        </>
    )
}

export default DataTables
