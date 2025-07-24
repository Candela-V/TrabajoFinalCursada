import React from "react"
import { Link} from "react-router"
import '../ContactItem/ContactItem.css'


const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <div>
            <Link className="Contact-items" to={`/contacts/${id}/messages`}>
                <img className="Profile_photo" src={img} alt={`${name} image profile`} />
                <div className="Contact-content">
                    <div className="MessageContact">
                        <h3>{name}</h3>
                    </div>
                    <div className="Last-message">
                        {last_message.text}
                    </div>
                </div>
                <span className="Last_Time">{last_time_connected}</span>
                {unread_messages > 0 && 
                    (
                        <span className="connected_unread-message">
                            {unread_messages}
                        </span>
                    )
                }
            </Link>
        </div>
    )
}

export default ContactItem