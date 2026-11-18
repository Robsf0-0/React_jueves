import { useState } from "react";

export default function useTarjetas(){
    const [tarjetas, setTarjetas] = useState([]);

    const agregar = (nueva) => setTarjetas((prev) => [nueva, ...prev]);

    return { tarjetas, agregar }
}