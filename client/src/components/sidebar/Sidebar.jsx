import React from 'react'
import {makeStyles} from '@mui/styles'
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    Typography
} from '@mui/material';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const useStyles = makeStyles(() => ({
    root: {
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02f7Eb3cXfYROjsKIiKilLi-YQcXWR3PxhM95bxRL5-t1OjM71WeqjHL-F6vkcYRG4Ws&usqp=CAU)',
        minHeight: '89.7vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'sticky',
        top: 0,
        bottom: 0,
        width : '210px'
    },
    mainList: {
        marginLeft : '-20px',
        marginTop: '6px',
        display: 'flex',
        flexDirection: 'column',
    },
    listSingle: {
        color: '#FFFFFF',
        maxWidth : '300px',
        backgroundColor: 'transparent',
    },
    listIcon: {
        color: 'pink',
        backgroundColor: 'transparent',
    },
    ListOrigIconOne: {
        fontSize: '28px',
        color: '#FFFFFF'
    },
    ListOrigIcon : {
        fontSize : '22px',
        color: '#FFFFFF'
    },
    Listtext : {
        fontWeight: 550,
        fontSize: '13px',
        marginLeft: '-7px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        marginLeft: '-15px',
    },
    ListtextLast: {
        fontWeight: 550,
        fontSize: '15px',
        marginLeft: '-8px',
        textTransform: 'uppercase',
        color: '#FFFFFF'
    },
    firstList : {
        paddingLeft: '-20px',
        borderBottom: '0.3px solid #dfe6e9',
        borderRadius : 'none',
        height: '60px'
    },
    firstListtext: {
        fontWeight: 550,
        fontSize: '15px',
        color: '#FFF8DC',
        textTransform: 'uppercase',
        marginLeft : '-15px',
    },
    lastItem: {
        color: '#FFF8DC',
        backgroundColor: 'transparent',
        marginTop: '220px'
    },
    accor : {
        backgroundColor : 'transparent',
        maxWidth : '220px',
        paddingleft: '20px',
        marginLeft : '10px',
        color: '#FFFFFF',
        fontSize : '20px',
        borderBottom: '1px solid #c8d6e5'
    }
}))



const Sidebar = () => {
    const classes= useStyles();
    return (
        <>
            <Box className={classes.root} >
                <ListItem className={classes.firstList} >
                    <ListItemButton  className = {
                        classes.listSingle
                    } >
                            <ListItemIcon  className = {
                                classes.listIcon
                            } >
                                <ViewSidebarIcon  className={classes.ListOrigIconOne} />
                            </ListItemIcon>
                            <Link to="/" style={{textDecoration : 'none'}} >
                                <ListItemText >
                                    <Typography  variant="text"  className={classes.firstListtext}  >Admin panel</Typography>
                                </ListItemText>
                            </Link>
                    </ListItemButton>
                </ListItem>

                    <List  className = {
                            classes.mainList
                        } >
                        <ListItem  >
                            <ListItemButton  className = {
                                classes.listSingle
                            } >
                                    <ListItemIcon  className = {
                                        classes.listIcon
                                    } >
                                        <DashboardIcon  className={classes.ListOrigIcon} />
                                    </ListItemIcon>
                                    <Link to="/" style={{textDecoration : 'none'}} >
                                <ListItemText >
                                    <Typography variant="text" className={classes.Listtext} >Dashboard</Typography>
                                </ListItemText>
                            </Link>
                            </ListItemButton>
                        </ListItem>

                        <ListItem  >
                            <ListItemButton  className = {
                                classes.listSingle
                            } >
                                    <ListItemIcon  className = {
                                        classes.listIcon
                                    } >
                                        <AccountCircleIcon  className={classes.ListOrigIcon} />
                                    </ListItemIcon>
                                <Link to="/profile" style={{textDecoration : 'none'}} >
                                <ListItemText >
                                    <Typography variant="text" className={classes.Listtext} >user Profile</Typography>
                                </ListItemText>
                                </Link>
                            </ListItemButton>
                        </ListItem>

                        <Accordion  className = {
                                    classes.accor
                                } elevation={0}  >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{color : '#FFFFFF'}} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                    <Typography style={{paddingLeft : '20px' , textTransform : 'uppercase' , fontWeight: 600 , fontSize : '15px'}} >Users</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails  style = {
                                                {
                                                    marginTop: '-30px',
                                                }
                                            } >
                                            <ListItem  >
                                                <ListItemButton  className = {
                                                    classes.listSingle
                                                }  >
                                                        <Link  to = "/admin/users/AllUsers"
                                                        style = {
                                                            {
                                                                textDecoration: 'none'
                                                            }
                                                        } >
                                                    <ListItemText >
                                                        <Typography variant="text" className={classes.Listtext} style={{fontSize : '12px' , paddingLeft : '30px'  }}  >All Users</Typography>
                                                    </ListItemText>
                                                </Link>
                                                </ListItemButton>
                                            </ListItem>
                                    </AccordionDetails>
                            </Accordion>

                        <Accordion  className = {
                                    classes.accor
                                } elevation={0}  >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{color : '#FFFFFF'}} />}
                                        aria-controls="panel2a-content"
                                        id="panel1a-header"
                                        >
                                    <Typography style={{paddingLeft : '20px' , textTransform : 'uppercase' , fontWeight: 600 , fontSize : '15px'}} >categories</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails  style = {
                                                {
                                                    marginTop: '-30px',
                                                }
                                            } >
                                            <ListItem >
                                                <ListItemButton  className = {
                                                    classes.listSingle
                                                } >
                                                        <Link Link to = "/admin/category/allCategories"
                                                        style = {
                                                            {
                                                                textDecoration: 'none'
                                                            }
                                                        } >
                                                    <ListItemText >
                                                        <Typography variant="text" className={classes.Listtext} style={{fontSize : '12px' , paddingLeft : '30px'  }} >All Categories</Typography>
                                                    </ListItemText>
                                                </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem  >
                                            <ListItemButton  className = {
                                                classes.listSingle
                                            } >
                                                    <Link  to = "/admin/category/addNew"
                                                    style = {
                                                        {
                                                            textDecoration: 'none'
                                                        }
                                                    } >
                                                <ListItemText >
                                                    <Typography variant="text" className={classes.Listtext} style={{fontSize : '12px' , paddingLeft : '30px'  }} >Add New</Typography>
                                                </ListItemText>
                                            </Link>
                                            </ListItemButton>
                                        </ListItem>
                                    </AccordionDetails>
                            </Accordion>

                        <Accordion  className = {
                                    classes.accor
                                } elevation={0}  >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{color : '#FFFFFF'}} />}
                                        aria-controls="panel2a-content"
                                        id="panel1a-header"
                                        >
                                    <Typography style={{paddingLeft : '20px' , textTransform : 'uppercase' , fontWeight: 600 , fontSize : '15px'}} >Products</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails  style = {
                                                {
                                                    marginTop: '-30px',
                                                }
                                            } >
                                        <ListItem  >
                                                <ListItemButton  className = {
                                                    classes.listSingle
                                                } >
                                                        <Link  to = "/admin/products/allProducts"
                                                        style = {
                                                            {
                                                                textDecoration: 'none'
                                                            }
                                                        } >
                                                    <ListItemText >
                                                        <Typography variant="text" className={classes.Listtext} style={{fontSize : '12px' , paddingLeft : '30px'  }}  >All Products</Typography>
                                                    </ListItemText>
                                                </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem  >
                                                <ListItemButton    className = {
                                                    classes.listSingle
                                                } >
                                                        <Link  to = "/admin/products/AddNew"
                                                        style = {
                                                            {
                                                                textDecoration: 'none'
                                                            }
                                                        } >
                                                    <ListItemText >
                                                        <Typography variant="text" className={classes.Listtext} style={{fontSize : '12px' , paddingLeft : '30px'  }}  >Add New</Typography>
                                                    </ListItemText>
                                                </Link>
                                                </ListItemButton>
                                            </ListItem>
                                    </AccordionDetails>
                            </Accordion>

                    </List>


                </Box>
        </>
    )
}

export default Sidebar