import React , {useState , useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import DataTables from '../../components/dataTables/Table';
import {UsersColumns} from '../../components/Tablecolumns/UsersColumns'
import {getAllUsers} from '../../server_api/Api'
import {useLocation} from 'react-router-dom'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'


const AllUsers = () => {
    const location = useLocation();
    const [ allUsers , setAllusers ] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await getAllUsers();
            setAllusers(data?.allDrivers)
        }
        getUsers();
    }, [location])
    return (
        <>
            <Drawer/>
            <DataTables rows={allUsers} columns={UsersColumns} title={"All Customers"} />
        </>
    )
}

export default AllUsers
