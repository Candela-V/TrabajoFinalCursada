import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import NavChat from "../NavChat/NavChat"
import "../ContactList/ContactList.css"
import { IoIosCamera } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { PiGearFineBold } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { MdMotionPhotosOn, MdOutlineMotionPhotosOn } from "react-icons/md";


const ContactsList = () => {
    const {contacts, isLoadingContacts, searchContact} = useContext(ContactContext) 
    const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(searchContact.toLowerCase()))
    if(isLoadingContacts){
        return (
            <LoaderSpinner/>
        )
    }

    return (
        <div className="Container_ContactList">
            <header className="Header_ContactList">
                <div>
                    <h1>Chats</h1>
                </div>
                <div className="Button_Cam_More">
                    <button className="IoIosCamera"><IoIosCamera/></button>
                    <button className="CiCircleMore"><CiCircleMore/></button>
                </div>
            </header>
            <main>
                <NavChat/>
                {
                    filteredContacts.map(
                        (contact) => {
                            return <ContactItem
                                key={contact.id}
                                id={contact.id}
                                name={contact.name}
                                last_time_connected={contact.last_time_connected}
                                img={contact.img}
                                last_message={contact.last_message}
                                unread_messages={contact.unread_messages}
                            />
                        }
                    )
                }
            </main>
            <footer className="footer_ContactList">
                <button> <MdOutlineMotionPhotosOn/> Novedades</button>
                <button> <FiPhone/> Llamadas</button>
                <button> <GrGroup/> Comunidades</button>
                <button> <IoChatbubblesOutline/> Chats</button>
                <button> <PiGearFineBold/>Ajustes</button>
            </footer>
        </div>
    )

}

export default ContactsList