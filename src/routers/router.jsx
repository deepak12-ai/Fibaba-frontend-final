import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import CategoryPage from "../pages/category/CategoryPage.jsx";
import Search from "../pages/search/Search.jsx";
import ShopPage from '../pages/shop/ShopPage.jsx'
import SingleProduct from "../pages/shop/ProductDetails/SingleProduct.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import PaymentSuccess from "../components/PaymentSuccess.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import UserDMain from "../pages/dashboard/user/dashboard/UserDMain.jsx";
import UserOrders from "../pages/dashboard/user/UserOrders.jsx";
import OrderDetails from "../pages/dashboard/user/OrderDetails.jsx";
import UserPayments from "../pages/dashboard/user/UserPayments.jsx";
import UserReviews from "../pages/dashboard/user/UserReviews.jsx";
import UserProfile from "../pages/dashboard/user/UserProfile.jsx";
import AdminDMain from "../pages/dashboard/admin/dashboard/AdminDMain.jsx";
import AddProduct from "../pages/dashboard/admin/addproduct/AddProduct.jsx";
import ManageProduct from "../pages/dashboard/admin/manageProduct/ManageProduct.jsx";
import UpdateProduct from "../pages/dashboard/admin/manageProduct/UpdateProduct.jsx";
import ManageUser from "../pages/dashboard/admin/users/ManageUser.jsx";
import ManageOrders from "../pages/dashboard/admin/manageOrders/ManageOrders.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            { path:'/', element: <Home/> },
            { path:'/categories/:categoryName', element: <CategoryPage/>},
            { path:'/search', element: <Search/> },
            { path:'/shop', element:<ShopPage/>},
            { path:'/shop/:id', element:<SingleProduct/>},
            { path:'/success', element:<PaymentSuccess/>},
            { path: '/orders/:orderId', element: <OrderDetails/>},
            {path:"*", element:<h1>Error 404 page not found !!</h1>}

        ]

    },
    {
        path:'/login', element: <Login/>
    },
    {
        path:'/register', element: <Register/>
    },
    //dashboard roots starts here
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,   //todo user private route here
        children:[
            //user routes   
            {path: '', element: <UserDMain/>},
            {path: 'orders', element: <UserOrders/>},
            {path: 'payments', element: <UserPayments/>},
            {path: 'profile', element: <UserProfile/>},
            {path: 'reviews', element: <UserReviews/>},
           
           // admin routes (only accessible by admin) Todo: private routes with role field
           {
            path: "admin", 
            element:<PrivateRoutes role='admin'><AdminDMain/></PrivateRoutes>
            },
           {
            path: "add-product", 
            element:<PrivateRoutes role='admin'><AddProduct/></PrivateRoutes>                                                     //<div>New post</div>
        },
           {
            path: "manage-products", 
            element:<PrivateRoutes role='admin'><ManageProduct/></PrivateRoutes>                                   
        },
           {
            path: "update-product/:id", 
            element:<PrivateRoutes role='admin'><UpdateProduct/></PrivateRoutes>                        
        },
           {
            path: "users", 
            element:<PrivateRoutes role='admin'><ManageUser/></PrivateRoutes>                    
        },
           {
            path: "manage-orders", 
            element:<PrivateRoutes role='admin'><ManageOrders/></PrivateRoutes>              
        },
        ]
    }
    
])

export default router
