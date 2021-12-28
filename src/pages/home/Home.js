import React from 'react'
import {makeStyles} from '@mui/styles'
import {Box , Grid} from '@mui/material';
import Drawer from '../../components/drawerSidebar/DrawerSidebar'
import ResuableComp from '../../components/reusableComp/MainPageComp'
import LineChart from '../../components/reusableComp/lineChart/LineChart'
import PieChart from '../../components/reusableComp/pieChart/PieChart'
import BarChart from '../../components/reusableComp/barChart/BarChart'
import TasksSec from '../../components/reusableComp/tasksSec/Tasks'
import Footer from '../../components/footer/Footer'
import PieCghar from '../../components/reusableComp/PieChart'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        paddingTop: '33px',
        paddingBottom: '33px',
        justifyContent: 'space-between',
        maxWidth: '1300px',
        paddingRight: '5px',
        paddingLeft: '30px',
        backgroundColor: '#F7F7F8',
        "@media (max-width: 1428px)": {
            maxWidth: '1380px',
        },
        "@media (max-width: 1278px)": {
            maxWidth: '1230px',
        },
        "@media (max-width: 1087px)": {
            maxWidth: '1050px',
        },
        "@media (max-width: 480px)": {
            flexDirection : 'column',
        },
        "@media (max-width: 2560px)": {
            maxWidth : '1250px'
        },
        "@media (max-width: 1440px)": {
            maxWidth: '1270px'
        },
        "@media (max-width: 1024px)": {
            maxWidth: '1300px',
        },
        "@media (max-width: 768px)": {
            maxWidth: '1000px',
        },
    },
    charts: {
        paddingTop: '0px',
        backgroundColor: '#F7F7F8',
        paddingLeft: '30px',
        maxHeight: '650px',
        "@media (max-width: 2560px)": {
           maxHeight: '650px',
           maxWidth: '1100px',
        },
        "@media (max-width: 1366px)": {
            maxWidth: '1000px',
        },
        "@media (max-width: 768px)": {
            maxHeight: '400px',
        },
        "@media (max-width: 425px)": {
            maxWidth: '500px',
            //backgroundColor: 'red'
        },
    },

    chartsLower: {
        paddingTop: '35px',
        backgroundColor: '#F7F7F8',
        paddingLeft: '30px',
        maxHeight: '650px',
        marginBottom : '50px'
    },
    lineChart: {
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        "@media (max-width: 920px)": {
            marginBottom : '50px'
        },
        "@media (max-width: 1366px)": {
            marginBottom: '50px',
            maxWidth : '620px'
        },
        "@media (max-width: 768px)": {
            marginBottom: '0px',
            maxHeight: '400px',
            marginBottom : '30px',
            maxWidth: '700px'
        },
        "@media (max-width: 425px)": {
            marginBottom: '0px',
            maxHeight: '400px',
            maxWidth: '300px'
        },
    },
}))

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container>
                <Grid item xs={12} style={{backgroundColor: '#F7F7F8' , marginTop: '60px' }} >
                    <Drawer/>
                    <Box className={classes.root} >
                        <ResuableComp/>
                        <ResuableComp/>
                        <ResuableComp/>
                        <ResuableComp/>
                    </Box>
                    <Grid container className={classes.charts}>
                        <Grid item xs={12} md={7.65} className={classes.lineChart} >
                            <LineChart/>
                        </Grid>
                        <Grid item xs={12} md={3.55}   >
                            <Box  className = {
                                classes.lineChart
                            } >
                               <PieChart/>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.chartsLower}>
                        <Grid item xs={12} md={5.65} className={classes.lineChart} >
                            <BarChart/>
                        </Grid>
                        <Grid item xs={12} md={5.95}   >
                            <TasksSec  />
                        </Grid>
                    </Grid>
                    <Footer/>
                </Grid>
        </Grid>

        </>
    )
}

export default Home
