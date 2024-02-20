import { createBrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout";
import Home from '../pages/Home';
import FavoriteImages from '../pages/FavoriteImages';
import FavoriteImage from '../pages/FavoriteImage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/images",
                element: <FavoriteImages />
            },
            {
                path: "/image/:id",
                element: <FavoriteImage />
            },
        ]
    }
]); 