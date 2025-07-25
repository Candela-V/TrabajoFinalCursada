import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import '../NewMessageForm/NewMessageForm.css'
import { IoSend } from "react-icons/io5";

export default function NewMessageForm() {

    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' 
    }
    return (
        <form onSubmit={handleSubmitNewMessage} className='form-enviar-mensaje'>
            <div className='container-form'>
                <label htmlFor="text">
                    <button className='emojis'>😊</button>
                </label>
                <textarea className='textarea' id='text' name='text' minLength={5} required >
                </textarea>
            </div>
            <button className='send-message' type='submit'><IoSend className='IoSend'/></button>
        </form>
    )
}