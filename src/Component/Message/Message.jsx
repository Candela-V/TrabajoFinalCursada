import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import '../Message/Message.css'
import { FaTrash } from "react-icons/fa6";

export default function Message({ emisor, hora, id, texto, status}) {

    const {handleEliminarMensaje} = useContext(MessagesContext)

    const classNames = {
        message:'chat-dialog'
        
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    return (
        <div className={classNames.message}>
            <span> {texto} </span>
            <div  className='Message_baseline'>
                <span>{hora}</span>
                {emisor === 'YO' && <span className="Visto">✔✔</span>}
                <button className='FaTrash_Button' onClick={() => {handleEliminarMensaje(id)}} ><FaTrash className='FaTrash'/></button>
            </div>
        </div>
    )
}