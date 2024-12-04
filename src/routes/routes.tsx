import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCustomer from "../components/Customer/AddCustomer/AddCustomer";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App
        },
        {
            path: '/add-customer',
            Component: AddCustomer
        }
    ]
)

export default router;