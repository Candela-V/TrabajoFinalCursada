import React from "react"
import { Link} from "react-router"

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`}>
            {/* <a href="/home"> */}{/* el elemento <a></a> Recarga la pagina */}
            <img src={img} alt={`${name} image profile`} />
            <h3>{name}</h3>
            <div>
                {last_message.text}
            </div>
            <span>{unread_messages}</span>
            <span>Ultima conexion: {last_time_connected}</span>
            <hr/>
        </Link>
        
        
    )
}

export default ContactItem