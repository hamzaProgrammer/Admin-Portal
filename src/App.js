import './App.css';
import {useEffect , useState } from 'react'
import Home from './pages/home/Home'
import DataTable from './pages/tables/DataTables'
import Map from './pages/map/Map'
import Profile from './pages/profile/Profile'
import { Routes , Route , useLocation } from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'


import AllUsers from './pages/users/AllUsers'
import UpdateUser from './pages/users/updateUsers'
import AddCategory from './pages/categories/AddCategory'
import AllCategories from './pages/categories/AllCategories'
import UpdateCategory from './pages/categories/UpdateCategories'
import Addproduct from './pages/products/AddProduct'
import AllProducts from './pages/products/ALlProducts'
import UpdateProduct from './pages/products/UpdateProd'


function App() {
    const [ isAdmin , setAdminLogin ] = useState(false)
    const location = useLocation();

    // cheing if admin logged in or not
    useEffect(() => {
      const checkAdmin = () => {
        const user = JSON.parse(localStorage.getItem('profile'))
        if(user){
          setAdminLogin(true)
        }else{
          setAdminLogin(false)
        }
      }
      checkAdmin();
    },[location])
  return (
    <>
          <Routes >
          {
              <Route exact path="/" element={
                isAdmin ? (
                  <Home/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/admin/users/AllUsers" element={
                isAdmin ? (
                  <AllUsers/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/admin/users/upadateUser/:id" element={
                isAdmin ? (
                  <UpdateUser/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/admin/category/addNew" element={
                isAdmin ? (
                  <AddCategory/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/admin/category/allCategories" element={
                isAdmin ? (
                  <AllCategories/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/admin/categories/upadateCategory/:id" element={
                isAdmin ? (
                  <UpdateCategory/>
                ) : (
                  <SignIn/>
                )
              } />
            }


            {
              <Route exact path="/admin/products/AddNew" element={
                isAdmin ? (
                  <Addproduct/>
                ) : (
                  <SignIn/>
                )
              } />
            }


            {
              <Route exact path="/admin/products/allProducts" element={
                isAdmin ? (
                  <AllProducts/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/admin/products/upadateProduct/:name"  element={
                isAdmin ? (
                  <UpdateProduct/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/profile" element={
                isAdmin ? (
                  <Profile/>
                ) : (
                  <SignIn/>
                )
              } />
            }
            
            {
              <Route exact path="/dataTables" element={
                isAdmin ? (
                  <DataTable/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/map" element={
                isAdmin ? (
                  <Map/>
                ) : (
                  <SignIn/>
                )
              } />
            }

            {
              <Route exact path="/signin" element={
                isAdmin ? (
                  <Home/>
                ) : (
                  <SignIn/>
                )
              } />
            }

          </Routes>
    </>
  );
}

export default App;
