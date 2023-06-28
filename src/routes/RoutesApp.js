import { Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import Agentes from '../pages/Agentes';
import Error from '../pages/Error';

export default function RoutesApp(){
    return(
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/agentes' element={<Agentes/>} />
            

            <Route path='*' element={<Error/>} />
        </Routes>
    )
}