import { Link, Route, Routes} from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import React from 'react'
import Pantalla from './views/pantalla/pantalla'
import Pantalla2 from './componentes/pantallla2/pantalla2'
import Listado from './componentes/listado/Listado'

const App = () => {
  return (
    <BrowserRouter>
        
        <Routes>
            <Route  path="*" element={<h1>LA PANTALLA NO SE ENCONTRO</h1>}/>
            <Route  index path="/" element={<Outlet />}/>
            <Route path="/Pantalla" element={< Pantalla />}/>
            <Route  path="/producto" element={< Pantalla2 />}/>
            <Route  path="/producto" element={< Pantalla3 />}/>

            <Route  path="/listado" element={< Listado />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App