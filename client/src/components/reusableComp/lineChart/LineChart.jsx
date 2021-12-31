import React from 'react';
import './lineChart.css';
import {
  Typography,
  Box,
  ListItemButton,
  ListItemText,
  ListItem,
  ListItemIcon,
  Divider
} from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update';
import {makeStyles} from '@mui/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const pdata = [
  {
    name: 'P',
    student: 13,
    fees: 10
  },
  {
    name: 'J',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection : 'column',
    borderRadius: '5px',
    padding: '15px',
    maxHeight: '600px',
    paddingTop: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    "@media (max-width: 480px)": {
      width: '380px',
    },
    "@media (max-width: 380px)": {
      width: '500px',
    },
    "@media (max-width: 307px)": {
      width: '550px'
    },
    "@media (max-width: 2560px)": {
      width : '1400px',
      height:'700px'
    },
    "@media (max-width: 1440px)": {
      width: '700px',
      maxHeight: '400px',
    },
    "@media (max-width: 1366px)": {
      maxWidth: '650px',
      maxHeight: '400px',
    },
    "@media (max-width: 425px)": {
      maxWidth: '350px',
      maxHeight: '400px',
    },
  },
    firstText : {
      fontSize : '22px',
      fontWeight: 300,
      color: '#333333',
      fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif'
    },
  subtext : {
    fontSize: '14px',
    fontWeight: 400,
    color: '#9a9a9a',
    fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
    marginBottom: '40px'
  },
  chart: {
    paddingBottom: '40px',
    paddingLeft : '50px',
    maxHeight: '300px',
    "@media (max-width: 1440px)": {
      width: '600px',
      maxHeight: '300px'
    },
    "@media (max-width: 425px)": {
      maxWidth: '300px',
      maxHeight: '300px'
    },
  },
  iconNew: {
    color: '#636e72',
    marginLeft: '15px'
  },
  btn: {
    color: '#636e72',
    paddingTop: '10px',
    textTransform: 'none',
    maxWidth: '220px',
    paddinLeft: '15px',
    backgroundColor: 'red'
  },
  text:{
    color: '#636e72',
    marginLeft: '-15px'
  },
  divider: {
    marginLeft: '15px',
    marginRight: '15px',
    "@media (max-width: 2560px)": {
      marginTop : '130px'
    },
  },
  myBox : {
    "@media (max-width: 1440px)": {
      width: '500px',
      height: '500px',
      marginBottom : '-100px'
    },
    "@media (max-width: 1366px)": {
      width: '600px',
      height: '550px',
      marginBottom: '-150px',
      fontSize : '10px',
    },
    "@media (max-width: 425px)": {
      width: '300px',
      height: '500px',
      marginBottom: '-100px',
    },
  },
  myClass: {
    "@media (max-width: 1440px)": {
      width: '500px',
      height: '500px',
      marginBottom: '-100px',
    },
  }
}))

function App() {
    const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="text"  className={classes.firstText}>Users Behaviour</Typography>
        <Typography variant="text"  className={classes.subtext}>24 Hours Performance</Typography>
        <Box  className={classes.myBox}>

            <LineChart data={pdata} width={500} aspect={1.5} height={200} margin={{ top: 10, right:20, left: 1, bottom: 5 , height : 250}} className={classes.myClass} >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value } />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
              <Legend />
              <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
            </LineChart>
        </Box>
        <Divider className={classes.divider} />

        <ListItem disablePadding   >
            <ListItemButton>
              <ListItemIcon>
                <UpdateIcon />
              </ListItemIcon>
              <ListItemText >
                  <Typography className={classes.text} variant="text">Updated 3 minutes ago</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </Box>

    </>
  );
}

export default App;