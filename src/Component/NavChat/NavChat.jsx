import React, { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import { TbSearch } from "react-icons/tb";
import "./NavChat.css"


const NavChat = () => {
    const {searchContact, setSearchContact}= useContext(ContactContext)

    return (
        <div className="search-message">
            <div className="container-icon">
                <TbSearch className="search-message_icon"/>
            </div>
            <input type="text"
                placeholder='Buscar un chat'
                value={searchContact}
                onChange={(e) => setSearchContact(e.target.value)}
                className="search-message_text"
            />
        </div>
    )
}

export default NavChat