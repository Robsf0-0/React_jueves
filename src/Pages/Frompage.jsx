import useFormulario from '../Hook/useFormulario'
import Form from '../Pages/Res'
import Head from '../Orquestador/Head'

export default function FormPage({agregar, tarjetas}){

    const props = useFormulario({agregar})

    return(
        <div className="CentrarP">

            <Head />

            <Form {...props} tarjetas={tarjetas}/>

        </div>
    )
}