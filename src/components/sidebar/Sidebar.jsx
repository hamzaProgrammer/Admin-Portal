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
import TableRowsIcon from '@mui/icons-material/TableRows';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02f7Eb3cXfYROjsKIiKilLi-YQcXWR3PxhM95bxRL5-t1OjM71WeqjHL-F6vkcYRG4Ws&usqp=CAU)',
        minHeight: '90vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'sticky',
        top: 0,
        bottom: 0,
        width : '229px'
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

                    <ListItem  >
                        <ListItemButton  className = {
                            classes.listSingle
                        } >
                                <ListItemIcon  className = {
                                    classes.listIcon
                                } >
                                    <TableRowsIcon  className={classes.ListOrigIcon} />
                                </ListItemIcon>
                                <Link to="/dataTables" style={{textDecoration : 'none'}} >
                            <ListItemText >
                                <Typography variant="text"  className={classes.Listtext} >table list</Typography>
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
                                    <AddLocationAltIcon  className={classes.ListOrigIcon} />
                                </ListItemIcon>
                                <Link to="/map" style={{textDecoration : 'none'}} >
                            <ListItemText >
                                <Typography variant="text" className={classes.Listtext} >Maps</Typography>
                            </ListItemText>
                        </Link>
                        </ListItemButton>
                    </ListItem>
                </List>


            </Box>
        </>
    )
}

export default Sidebar