import React from 'react'
import {makeStyles} from '@mui/styles'
import {
    Box,
    ListItem,
    Grid,
    ListItemText,
    Typography,
    ListItemButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Divider
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        paddingTop: '15px',
        marginLeft: '30px',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderBottom: '1px solid #b2bec3',
        display: 'flex',
        flexDirection: 'column',
        "@media (max-width: 1366px)": {
            marginLeft: '-20px',
        },
        "@media (max-width: 1024px)": {
            marginLeft: '-20px',
        },
        "@media (max-width: 920px)": {
            marginLeft: '0px',
        },
        "@media (max-width: 480px)": {
            width : '550px'
        },
        "@media (max-width: 307px)": {
            width: '550px'
        },
        "@media (max-width: 425px)": {
            width : '400px',
            marginTop: '50px'
        },
        
    },
    miniRoot : {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom  : '10px',
    },
    firstText : {
        fontSize : '22px',
        fontWeight: 300,
        color: '#333333',
        paddingLeft: '15px',
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
      },
    subtext : {
        paddingLeft: '15px',
      fontSize: '14px',
      fontWeight: 400,
      color: '#9a9a9a',
      fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
      marginBottom: '40px'
    },
    text:{
      color: '#636e72',
      marginLeft: '-15px',
      paddingTop: '15px',
      paddingLeft : '15px'
    },
    data : {
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingRight: '20px',
        height: '80px',
        borderTop : '1px solid #b2bec3',
        verticalAlign : 'center',
    },
    dataText : {
        fontSize : '16px',
        colofr: '#212529',
        fontFamily :'Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 400,
        textAlign : 'center',
        "@media (max-width: 920px)": {
            fontSize: '14px',
        },
    },
    divider: {
        marginLeft: '15px',
        marginRight: '15px',
    }
}))


const PieChartComp = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} >
                <Box className={classes.miniRoot}>
                    <Typography variant="text"  className={classes.firstText}>Tasks</Typography>
                    <Typography variant="text"  className={classes.subtext}>Backend Development</Typography>
                    <Grid container className={classes.data} >
                        <Grid item xs={2} md={1} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={8} md={9.5}  >
                            <Typography className={classes.dataText} variant="text" >Sign contract for "What are conference organizers afraid of?"</Typography>
                        </Grid>
                        <Grid item xs={2} md={1.5} >
                            <CheckIcon style={{color: 'green'}} />
                            <ClearIcon style={{color: 'red'}} />
                        </Grid>
                    </Grid>

                    <Grid container className={classes.data} >
                        <Grid item xs={2} md={1} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={8} md={9.5}  >
                            <Typography className={classes.dataText} variant="text" >Sign contract for "What are conference organizers afraid of?"</Typography>
                        </Grid>
                        <Grid item xs={2} md={1.5} >
                            <CheckIcon style={{color: 'green'}} />
                            <ClearIcon style={{color: 'red'}} />
                        </Grid>
                    </Grid>

                    <Grid container className={classes.data} >
                        <Grid item xs={2} md={1} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={8} md={9.5}  >
                            <Typography className={classes.dataText} variant="text" >Sign contract for "What are conference organizers afraid of?"</Typography>
                        </Grid>
                        <Grid item xs={2} md={1.5} >
                            <CheckIcon style={{color: 'green'}} />
                            <ClearIcon style={{color: 'red'}} />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.data} >
                        <Grid item xs={2} md={1} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={8} md={9.5}  >
                            <Typography className={classes.dataText} variant="text" >Sign contract for "What are conference organizers afraid of?"</Typography>
                        </Grid>
                        <Grid item xs={2} md={1.5} >
                            <CheckIcon style={{color: 'green'}} />
                            <ClearIcon style={{color: 'red'}} />
                        </Grid>
                    </Grid>

                    <Grid container className={classes.data} >
                        <Grid item xs={2} md={1} >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox  />} label="" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={8} md={9.5}  >
                            <Typography className={classes.dataText} variant="text" >Sign contract for "What are conference organizers afraid of?"</Typography>
                        </Grid>
                        <Grid item xs={2} md={1.5} >
                            <CheckIcon style={{color: 'green'}} />
                            <ClearIcon style={{color: 'red'}} />
                        </Grid>
                    </Grid>
                </Box>
                <Divider className={classes.divider} />
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText >
                        <Typography className={classes.text} variant="text">updated 3 minutes ago</Typography>
                    </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Box>

      
        </>
    )
}

export default PieChartComp