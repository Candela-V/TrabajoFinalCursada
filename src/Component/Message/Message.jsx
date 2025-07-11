import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'

export default function Message({ emisor, hora, id, texto, status}) {
    //Mostrar por consola el dato guardado en el contexto de mensajes
    //useContext es una funcion de react que me permite usar un contexto
    //Recibe por parametro el contexto a consumir
    //useContext devuelve el valor del la propiedad value del contexto proveedor
    /* const result = useContext(MessagesContext)
    console.log(result) */
    const {handleEliminarMensaje} = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog'
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    return (
        <div className={classNames.message}>
            <span> {texto} </span>
            <div>
                <span>{hora}</span>
                <span >✔✔</span>
                {/* Nos interesa pasar una funcion anonima cuando queremos pasarle un parametro a x funcion */}
                <button onClick={() => {handleEliminarMensaje(id)}} >Eliminar</button>
            </div>
        </div>
    )
}