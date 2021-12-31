import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {makeStyles} from '@mui/styles'
import {
    Box,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    ListItemButton,
    Divider
} from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const useStyles = makeStyles(() => ({
    root: {
      marginLeft: '35px',
      backgroundColor: '#FFFFFF',
      paddingTop: '15px',
      borderRadius: '5px',
      boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      "@media (max-width: 800px)": {
          marginTop: '30px',
          marginLeft: '0px',
          marginBottom : '30px',
          maxHeight: '100px',
           //backgroundColor: 'yellow'
      },
      "@media (max-width: 480px)": {
        width: '380px',
        marginLeft: '0px',
      },
        borderBottom: '1px solid #b2bec3',
        display: 'flex',
        flexDirection: 'column',
        "@media (max-width: 307px)": {
          width: '550px'
        },
        "@media (max-width: 420px)": {
          marginLeft: '50px',
          width: '500px',
          maxHeight: '400px'
        },
        "@media (max-width: 2560px)": {
          marginLeft: '20px',
          width: '500px',
          maxHeight: '400px'
        },
        "@media (max-width: 1440px)": {
          marginLeft: '50px',
          width: '500px',
          maxHeight: '400px'
        },
        "@media (max-width: 1366px)": {
          marginLeft: '220px',
          width: '400px',
          backgroundColor : 'pink',
          maxHeight: '400px'
        },
        "@media (max-width: 1024px)": {
          marginLeft: '90px',
          maxWidth: '300px',
          backgroundColor : 'red', 
          maxHeight: '400px'
        },
        "@media (max-width: 768px)": {
          marginLeft: '150px',
          width: '300px',
          height: '500px',
          zIndex : 999,
          boxShadow: 'none'
        },
        "@media (max-width: 425px)": {
          marginLeft: '120px',
          width: '200px',
          height: '500px',
          zIndex: 999,
          boxShadow: 'none',
          marginBottom : '100px'
        },
        "@media (max-width: 1366px)": {
          maxWidth : '300px',
          marginLeft : '320px'
        },
    },
    firstText : {
        fontSize : '22px',
        fontWeight: 300,
        color: '#333333',
        paddingLeft: '15px',
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
        "@media (max-width: 2560px)": {
          fontSize : '27px'
        },
        "@media (max-width: 1440px)": {
          fontSize : '20px'
        },
      },
    subtext : {
        paddingLeft: '15px',
      fontSize: '14px',
      fontWeight: 400,
      color: '#9a9a9a',
      fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
      marginBottom: '40px',
      "@media (max-width: 2560px)": {
        fontSize: '20px'
      },
      "@media (max-width: 1440px)": {
        fontSize: '15px'
      },
      "@media (max-width: 768px)": {
        fontSize: '18px',
      },
    },
    chart: {
      borderBottom: '1px solid #b2bec3',
      paddingBottom: '40px'
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
    pie : {
      marginLeft: '90px',
      marginTop: '-20px',
      "@media (max-width: 1087px)": {
        marginLeft: '40px',
      },
      "@media (max-width: 800px)": {
        //backgroundColor: 'pink'
        marginLeft: '00px',
      marginTop: '-50px',
      },
      "@media (max-width: 420px)": {
        marginLeft: '50px',
      },
      "@media (max-width: 2560px)": {
         marginLeft: '150px',
         height: '300px',
         width: '300px'
      },
      "@media (max-width: 1440px)": {
        marginLeft: '150px',
        height: '80px',
        width: '80px'
      },
      "@media (max-width: 1366px)": {
        marginLeft: '40px',
        height: '80px',
        width: '80px'
      },
      "@media (max-width: 1024px)": {
        marginLeft: '50px',
        height: '80px',
        width: '80px'
      },
      "@media (max-width: 768px)": {
        marginLeft: '50px',
        height: '120px',
        width: '120px'
      },
      "@media (max-width: 425px)": {
        marginLeft: '0px',
        height: '120px',
        width: '120px'
      },
    },

    divider: {
      marginLeft: '15px',
      marginRight: '15px',
    },
    pieBox: {
      width: '200px',
      height: '200px',
      marginBottom : '40px',
      "@media (max-width: 1440px)": {
        width: '200px',
      height: '200px',
      fontSize : '15px',
      fontWeight: 600
      },
    }
}))


const PieChartComp = () => {
    const classes = useStyles();
    return (
        <>
          <Box className={classes.root} >
              <Typography variant="text"  className={classes.firstText}>Email Statistics</Typography>
              <Typography variant="text"  className={classes.subtext}>Last Compaign Performance</Typography>
                <Box className={classes.pieBox} >
                  <PieChart width={200} height={280} className={classes.pie} >
                      <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                      >
                          {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                      </Pie>
                  </PieChart>
                </Box>
              <Divider className={classes.divider} />
              <ListItem disablePadding>
                  <ListItemButton>
                  <ListItemIcon>
                      <UpdateIcon />
                  </ListItemIcon>
                  <ListItemText >
                      <Typography className={classes.text} variant="text">Compaign Sent 2 days ago</Typography>
                  </ListItemText>
                  </ListItemButton>
              </ListItem>
          </Box>
      
        </>
    )
}

export default PieChartComp