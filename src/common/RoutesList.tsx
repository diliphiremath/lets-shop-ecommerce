import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom'
import WishesHome from '../containers/WishesHome/WishesHome';

const RoutesList: FC<any> = () => {

    return (
        <Routes>
            <Route path="/ganeshwishes/:name" element={<WishesHome />}>
            </Route>
        </Routes>
    )
}


export default RoutesList;
