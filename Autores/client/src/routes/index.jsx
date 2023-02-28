import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AddAuthor from "../pages/AddAuthor";
import AuthorEdit from "../pages/AuthorEdit";
import AuthorList from "../pages/AuthorList";
import NotFound from "../pages/NotFound";


export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <AuthorList />
            },
            {
                path:'/add',
                element: <AddAuthor />
            },
            {
                path:'/edit/:id',
                element: <AuthorEdit />
            }
        ]
    }
]);