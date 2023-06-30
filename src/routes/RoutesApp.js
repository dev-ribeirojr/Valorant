import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Agentes from '../pages/Agentes';
import Maps from '../pages/Maps';
import Error from '../pages/Error';

export default function RoutesApp(){
    return(
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/agents/:uuid' element={<Agentes/>} />
            <Route path='/maps/:uuid' element={<Maps/>} />
            

            <Route path='*' element={<Error/>} />
        </Routes>
    )
}