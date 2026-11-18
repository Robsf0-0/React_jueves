import Tar from './Tar'
import Dom from './Dom'
import Menu from './Menu'
import Res from '../Pages/Frompage'
import Inicio from './Inicio'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import useTarjetas from "../Hook/useTarjetas";

export default function App(){
    const {tarjetas,agregar} = useTarjetas();

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Contacto" element={<Tar/>} />
                <Route path="/Domicilio" element={<Dom/>} />
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/Reseñas" element={<Res agregar={agregar} tarjetas={tarjetas}/>} />
            </Routes>
        </BrowserRouter>

    )
}

