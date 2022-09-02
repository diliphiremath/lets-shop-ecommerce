import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom'
import WishesHome from '../containers/WishesHome/WishesHome';
import WishesHomeShare from '../containers/WishesHome/WishesHomeShare';

const RoutesList: FC<any> = () => {

    return (
        <Routes>
            <Route path="/ganeshwishes/:name" element={<WishesHome />} />  
            <Route path="/ganeshwishes/:name/share" element={<WishesHomeShare />}/>
        </Routes>
    )
}


export default RoutesList;
