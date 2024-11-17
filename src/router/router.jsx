import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Page404 from '../error/Page404'
import Booking from '../pages/Booking'
import Service from '../pages/Service'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/booking',
        element: <Booking></Booking>
    },
    {
        path: '/service',
        loader: () => fetch('./hotel_room.json'),
        element: <PrivateRoute>
            <Service></Service>
        </PrivateRoute>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
 ],{ 
    future: { v7_startTransition: true, 
    v7_relativeSplatPath: true, 
    v7_fetcherPersist: true, 
    v7_normalizeFormMethod: true, 
    v7_partialHydration: true, 
    v7_skipActionErrorRevalidation: true, } 
});

export default router