import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Main } from 'components/Pages';

function Router(){
    console.log('process.env.PUBLIC_URL ', process.env.PUBLIC_URL)
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Main />}/>
        </Routes>
    )
}

export default Router;