import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Main } from 'components/Pages';

function Router(){
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}

export default Router;