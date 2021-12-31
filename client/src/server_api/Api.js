const axios = require('axios');

const API = axios.create({
    baseURL: 'https://new-mtechub-admin-panel-server.herokuapp.com/'
});

// this is for using local storage in headers, otherwise it will not work
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;

});




// users Routes
const signUpUser = (data) => API.post(`/api/users/register`, data);
const signInUser = (data) => API.post(`/api/users/signin`, data);
const getAllUsers = () => API.get(`/api/users/getAllDrivers`);
const getSingleUser = (id) => API.get(`/api/users/getSingleUser/${id}`);
const updateUser = (data) => API.put(`/api/users/updateUser`, data);


// categories  routes
const createCategories = (data) => API.post(`/api/category/addNew`, data);
const getCategories = () => API.get(`/api/category/getAllCatyegries`);
const getSingleCategories = (id) => API.get(`/api/category/getSingleCatgeory/${id}`);
const updateMyCategory = (data) => API.put(`/api/category/updateCategory`, data);


// Brands routes
// const addNewBrand = (data) => API.post(`/brands/addNew`, data);
// const getAllBrands = () => API.get(`/brands/getAll`);

// products  routes
const addProduct = (data) => API.post(`/api/products/addNew`, data);
const allProducts = () => API.get(`/api/products/getAllProducts`);
// const getCategoryWise = (id) => API.get(`/products/allCateProducts/${id}`);
// const deleteProduct = (id) => API.get(`/products/deleteProducts/${id}`);
const singleProduct = (name) => API.get(`/api/products/getSingleProduct/${name}`);
const updateProduct = (data) => API.put(`/api/products/updateProduct`, data);



// cart  routes
//const addtoCart = (data) => API.post(`/cart/addProd`, data);



module.exports = {
    signUpUser,
    signInUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    createCategories,
    getCategories,
    getSingleCategories,
    updateMyCategory,
    addProduct,
    allProducts,
    updateProduct,
    singleProduct
    // createCategories,
    // getCategories,
    // addProduct,
    // addtoCart,
    // getAllOfCategories,
    // deleteMyCategory,
    // allProducts,
    // deleteProduct,
    // singleProduct,
    // updateProduct,
    // getCategoryWise,
    // updateMyCategory,
    // getSingleOfCategories,
    // getSubCategories,
    // getSingleSubCategories,
    // addSubcategory,
    // addNewBrand,
    // getAllBrands,
    // CheckUser
}