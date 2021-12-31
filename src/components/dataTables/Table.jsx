import React from 'react'
import {makeStyles} from '@mui/styles'
import {
    Box,
    Typography,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        paddingTop: '60px',
        marginLeft: '30px',
        marginTop: '30px',
        marginRight: '70px',
        marginBottom : '30px',
        //paddingBottom: '40px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderBottom: '1px solid #b2bec3',
        display: 'flex',
        flexDirection: 'column',
        "@media (max-width: 970px)": {
          marginLeft: '10px',
          marginRight: '20px',
        },
    },
    firstText : {
        fontSize : '25px',
        fontWeight: 300,
        color: '#333333',
        marginBottom : '50px',
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

}))


const PieChartComp = ({columns , rows , title}) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} style={{marginTop: '50px'}} >
                <Typography variant="text"  className={classes.firstText}>{title}</Typography>
                {/* <Typography variant="text"  className={classes.subtext}>Here is a subtitle for this tab</Typography> */}

                <Box style={{ height: 400, width: '100%' ,}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={r=>r._id}
                    />
                </Box>
            </Box>
        </>
    )
}

export default PieChartComp