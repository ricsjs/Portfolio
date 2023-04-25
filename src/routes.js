import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ricardo from './components/pages/Ricardo';

function RoutesApp(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Ricardo/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;