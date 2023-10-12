import React from 'react';
import  {createRoot} from 'react-dom/client';

import Home from './components/Home';
import DynamicPage from './components/DynamicPage';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home />
        ),
    },
    {
        path: "dynamic",
        element: <DynamicPage />,
    },
]);

createRoot(document.getElementById('root'))
    .render(
        <RouterProvider router={router} />
    )
