import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'

export default function NewMessageForm() {
    /* const result = useContext(MessagesContext)
    alert(result.dato) */
    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        //Esta funcion se encarga de manejar el envio del formulario
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' //Borrar el mensaje enviado del formulario
        //Otra forma de resetar el form
        //e.target.reset()
    }
    return (
        <form onSubmit={handleSubmitNewMessage}>
            <div>
                <label htmlFor="text">Nuevo mensaje:</label>
                <textarea id='text' name='text' minLength={5} required ></textarea>
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    )
}