import { Link } from 'react-router-dom'
import B from '../../assets/Bot.png'

export default function Bot(){
    return(
        <Link to="/Formulario">
            <img src={B} alt=""/>
        </Link>
    )
}