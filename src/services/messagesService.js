import mook_data from "../data/contact-mook"


export const getMessagesByContactId = (contact_id) => {
    for(const contact of mook_data.contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact.messages
        }
    }
    return null
}