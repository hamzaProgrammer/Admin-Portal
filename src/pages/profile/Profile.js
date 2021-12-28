import React from 'react';
import {Grid } from '@mui/material'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'
import Footer from '../../components/footer/Footer'
import TextFields from '../../components/profileComps/ProfileTextFields'
import UserCard from '../../components/profileComps/UserCard'
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        paddingLeft : '30px',
        paddingRight: '70px',
        paddingTop: '30px',
        marginBottom : '60px',
        "@media (max-width: 425px)": {
            minWidth: '900px',
            paddingLeft : '0px',
            paddingRight: '0px',
        },
    },
    miniRoot: {
        backgroundColor: '#F7F7F8',
        marginTop: '80px',
    }
}))


const Profile = () => {
    const classes = useStyles();
  return (
    <>

        <Grid container className={classes.miniRoot} >
                <Grid item xs={12}  >
                    <Drawer/>
                    <Grid container className={classes.root} >
                            <Grid item xs={12}   md={8.2} >
                                <TextFields/>
                            </Grid>
                            <Grid item xs={12}  md={3.8} >
                                <UserCard/>
                            </Grid>
                        </Grid>
                    <Footer/>
                </Grid>
            </Grid>
    </>
  );
}

export default Profile;
