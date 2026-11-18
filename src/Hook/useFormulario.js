import { useState } from 'react'

 const inicial ={
        Titulo:'',Imagen:'',Descripcion:'',Estrellas:''
    }

export default function useFormulario({agregar}){
    const [datos, setDatos] = useState(inicial)

    const cambiar = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value})
    }

    const enviar = (e) => {
        e.preventDefault()
        agregar({
            id: Date.now(),
            title: datos.Titulo,
            descripcion: datos.Descripcion,
            img: datos.Imagen,
            estrellas: datos.Estrellas
        })
        setDatos(inicial)
    }

    return {
        datos,
        onCambio: cambiar,
        onEnviar: enviar,
        onReset: () => setDatos(inicial)
    }
}