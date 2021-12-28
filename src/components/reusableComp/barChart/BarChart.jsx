import React from 'react'
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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [{
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const useStyles = makeStyles(() => ({
    mainRoot: {
    },
    root: {
      backgroundColor: '#FFFFFF',
      paddingTop: '15px',
      borderRadius: '5px',
      //paddingBottom: '40px',
      maxHeight: '600px',
      boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      "@media (max-width: 800px)": {
        marginTop: '850px',
        marginLeft: '0px',
        marginBottom: '30px'
      },
      "@media (max-width: 480px)": {
        width: '380px',
      },
      "@media (max-width: 380px)": {
        width: '500px',
      },
      "@media (max-width: 307px)": {
        width: '550px'
      },
      "@media (max-width: 1440px)": {
        maxWidth: '550px'
      },
      "@media (max-width: 1366px)": {
        maxWidth: '550px',
        fontSize : '10px',
        height: '500px',
        marginBottom : '-200px',
        paddingBottom : '100px',
      },
      "@media (max-width: 768px)": {
        maxWidth: '750px',
        marginTop: '1050px'
      },
        borderBottom: '1px solid #b2bec3',
        display: 'flex',
        flexDirection: 'column',
    },
    firstText : {
        fontSize : '22px',
        fontWeight: 300,
        color: '#333333',
        paddingLeft: '15px',
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif'
      },
    subtext : {
        paddingLeft: '15px',
      fontSize: '14px',
      fontWeight: 400,
      color: '#9a9a9a',
      fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
      marginBottom: '40px'
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
      marginLeft: '-15px',
      paddingTop: '15px'
    },
    barChart : {
      width : '600px',
      height: '330px',
      "@media (max-width: 1087px)": {
        width: '400px',
        height: '280px',
      },
      "@media (max-width: 1087px)": {
        width: 'inherit',
        height: 'inherit',
      },
    },
    divider: {
      marginLeft: '15px',
      marginRight: '15px',
    },
    myChart : {
      "@media (max-width: 1440px)": {
        width: '500px',
        maxHeight: '280px',
      },
      "@media (max-width: 1024px)": {
        width: '300px',
        maxHeight: '280px',
      },
      "@media (max-width: 1366px)": {
        width: '300px',
        marginBottom : '50px',
        maxHeight: '280px',
      },
    }
}))


const PieChartComp = () => {
  const height = '200px';
    const classes = useStyles();
    return (
        <>
                    <Box className={classes.root} >
                        <Typography variant="text"  className={classes.firstText}>2017 Sales</Typography>
                        <Typography variant="text"  className={classes.subtext}>All products including Taxes</Typography>
                        <Box className={classes.myChart} >
                            <BarChart
                            width= {400}
                            height={330}
                                data={data}
                                margin={{
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                                barSize={20}
                                className={classes.barChart}
                              >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </Box>
                        <Divider className={classes.divider} />
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <UpdateIcon />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography className={classes.text} variant="text">Data information certified</Typography>
                            </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Box>

      
        </>
    )
}

export default PieChartComp