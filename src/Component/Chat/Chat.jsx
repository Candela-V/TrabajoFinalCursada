import React, { useContext } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Context/MessagesContext'
import '../Chat/Chat.css'

export default function Chat() {
    const {messages} = useContext(MessagesContext)
    if(messages.length === 0){
        return (
            <div>
                <span>No hay mensajes!</span>
            </div>
        )
    }
    return (
        <div>
            {
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            emisor={message.emisor}
                            id={message.id}
                            hora={message.hora}
                            texto={message.texto}
                            status={message.status}
                        />
                    )
                })
            }
        </div>
    )
}