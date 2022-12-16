import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home.jsx';
import { CreateArticulo } from '../pages/createArticulo.jsx';


function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/vender" element={<CreateArticulo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;