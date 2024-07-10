import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductManagement from "../Pages/ProductsManagement/ProductManagement";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/product-management',
                element: <ProductManagement />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

export default router;