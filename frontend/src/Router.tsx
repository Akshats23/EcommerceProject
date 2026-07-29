import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        index: true,
        path: "products/new",
        element: <AddProduct />,
      },
            {
        index: true,
        path: "products/edit/:id",
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
