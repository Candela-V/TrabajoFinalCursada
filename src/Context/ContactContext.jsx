import { createContext, useState } from "react";
import { getContactList } from "../services/contactService";



export const ContactContext = createContext({
    contacts: [],
    isLoadingContacts: true
})

const ContactContextProvider = ({children}) => {
    
    const [contacts, setContacts] = useState(
        []
    )
    const [isLoadingContacts, setIsLoadingContacts] = useState(true)
    const [searchContact, setSearchContact] = useState("")

    setTimeout(
        () => {
            const contact_list = getContactList() 
            setContacts(contact_list)
            setIsLoadingContacts(false)
        }, 
        1000
    )


    return (
        <ContactContext.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts,
                    searchContact: searchContact,
                    setSearchContact: setSearchContact,
                }
            }
        >
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider