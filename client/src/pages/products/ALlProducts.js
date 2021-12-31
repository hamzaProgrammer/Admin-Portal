import React , {useState , useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import DataTables from '../../components/dataTables/Table';
import {productsColumns} from '../../components/Tablecolumns/UsersColumns'
import {allProducts} from '../../server_api/Api'
import {useLocation} from 'react-router-dom'
import Drawer from '../../components/drawerSidebar/DrawerSidebar'



const AllCategories = () => {
    const location = useLocation();
    const [ allProds , setAllprods ] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await allProducts();
            setAllprods(data?.allProducts)
        }
        getUsers();
    }, [location])
    return (
        <>
            <Drawer/>
            <DataTables rows={allProds} columns={productsColumns} title={"All Products"} />
        </>
    )
}

export default AllCategories
