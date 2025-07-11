import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosBody, IoIosBackspace } from "react-icons/io";
import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';

export default function HomeScreen() {

    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)

    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }
    const handleClickAlertButton = () => {
		Swal.fire({
			title: 'Error!',
			text: 'Do you want to continue',
			icon: 'error',
			confirmButtonText: 'Cool'
		})
	}

    return (
        <div>
            <Link to={`/contacts/${contact_id}/detail`}>Ir a detalle de contacto</Link>
            <h3>
                Lets go for a <IoIosBody />?
            </h3>
            <button onClick={handleClickAlertButton}>alerta bonita</button>
            <Chat />
            <NewMessageForm/>
        </div>
        
    )
}