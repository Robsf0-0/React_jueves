import Tar from './Tar'
import Dom from './Dom'
import Menu from './Menu'
import Res from './Res'
import Inicio from './Inicio'
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Contacto" element={<Tar/>} />
                <Route path="/Domicilio" element={<Dom/>} />
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/Reserva" element={<Res/>} />
            </Routes>
        </BrowserRouter>

    )
}

