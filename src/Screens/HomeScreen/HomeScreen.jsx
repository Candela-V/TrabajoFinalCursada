import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosBody, IoIosBackspace } from "react-icons/io";
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'; 
import {ContactDetailContext} from '../../Context/ContactDetailContext';
import '../HomeScreen/HomeScreen.css';
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5"
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function HomeScreen() {

    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)
    const {loadContact, contact_detail} = useContext(ContactDetailContext)

    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )

    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }

    return (
        <div className='container-conversation'>
            <Link className='HeaderChat' to={`/contacts/${contact_id}/detail`}>

                <div className='ContactDetail'>
                    <Link className='Back' to="/"><MdOutlineArrowBackIosNew/> </Link>
                    <img className='HeaderPhoto' src={`${contact_detail.img}`} alt={`${contact_detail.name} imagen perfil`} />
                    <h3 
                        className='HeaderName'>{`${contact_detail.name}`}
                    </h3>
                </div>
                <div className='Calls'>
                    <button className='IoCall_Button'><IoCall className='IoCall'/></button>
                    <button className='FaVideo_Button'><FaVideo className='FaVideo'/></button>
                </div>
            </Link>
            <Chat className='chat' ></Chat>
            <NewMessageForm className='enviar-mensaje'></NewMessageForm>
        </div>
        )
}