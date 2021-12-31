import React , {useState , useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import DataTables from '../../components/dataTables/Table';
import {categoriesColumns} from '../../components/Tablecolumns/UsersColumns'
import {getCategories} from '../../server_api/Api'
import {useLocation} from 'react-router-dom'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'



const AllCategories = () => {
    const location = useLocation();
    const [ allUsers , setAllusers ] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await getCategories();
            setAllusers(data?.allCategories)
        }
        getUsers();
    }, [location])
    return (
        <>
            <Drawer/>
            <DataTables rows={allUsers} columns={categoriesColumns} title={"All Categories"} />
        </>
    )
}

export default AllCategories
