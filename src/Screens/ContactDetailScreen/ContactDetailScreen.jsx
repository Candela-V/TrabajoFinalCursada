import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'

export default function ContactDetailScreen() {
    const {contact_id} = useParams()
    const {loadContact, contact_detail, isLoadingContactDetail} = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )

    if(isLoadingContactDetail){
        return <LoaderSpinner/>
    }
    return (
        <div>
            <h1>{contact_detail.name}</h1>
        </div>
    )
}