import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import '../ContactDetailScreen/ContactDetailScreen.css'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";
import { TfiBell } from "react-icons/tfi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineLockPerson } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import { HiOutlineSave } from "react-icons/hi";
import { Link } from 'react-router'
import { MdArrowForwardIos } from "react-icons/md";

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
        <div className='Back_page'>
            <div className='Header_contact'>
                <Link to={`/contacts/${contact_id}/messages`}><MdOutlineArrowBackIosNew/></Link>
                <h1>Info. del contacto</h1>
                <button> Editar
                </button>
            </div>
            <div className='Name_Contact'>
                <img className='Contact_photo_icon' src={contact_detail.img}/>
                <h1>{contact_detail.name}</h1>
                <span> +54 9 11 5523-****</span>
            </div>
            <div className='Multimedia_Button'>
                <button><LuPhone/> Llamar</button>
                <button><HiOutlineVideoCamera/> Video</button>
                <button><PiMagnifyingGlassBold/>Buscar</button>
            </div>
            <div className='Archives_Docs'>
                <div className='Section-Archives'>
                <span className='span_icono'> <AiOutlinePicture/></span>
                <span className='span_text'>Archivos,enlaces y docs</span>
                <span> 92</span>
                </div>
                <div className='Section-Archives'>
                <span className='span_icono'> <IoIosStarOutline/></span>
                <span className='span_text'> Destacados</span>
                <span>10</span>
                </div>
            </div>
            <div className='Container_Teme'>
                <div className='Section-Teme'>
                <span className='span_icono'> <TfiBell/></span>
                <span className='span_text'>Notificaciones</span>
                <span><MdArrowForwardIos/></span>
                </div>
                <div className='Section-Teme'>
                <span className='span_icono'> <IoColorPaletteOutline/></span>
                <span className='span_text'>Tema del chat</span>
                <span><MdArrowForwardIos/></span>
                </div>
                <div className='Section-Teme'>
                <span className='span_icono'> <HiOutlineSave/></span>
                <span className='span_text'>Guardar en Fotos</span>
                <span> Por defecto</span>
                </div>
            </div>
            <div className='Container_Private'>
                <div className='Private-Section'>
                <span className='span_icono'><FaRegClock/></span>
                <span className='span_text'>Mensajes temporales</span>
                <span>No</span>
                </div>
                <div  className='Private-Section'>
                <span className='span_icono'> <MdOutlineLockPerson/></span>
                <span className='span_text'>Restringir chat</span>
                <span>Desactivado</span>
                </div>
                <div  className='Private-Section'>
                <span className='span_icono'> <BsShieldLock/></span>
                <span className='span_text'>Privacidad avanzada del chat</span>
                <span>Desactivado</span>
                </div>
                <div  className='Private-Section'>
                <span className='span_icono'> <IoLockClosedOutline/></span>
                <span className='span_text'>Cifrado</span>
                <span> <MdArrowForwardIos/></span>
                </div>
            </div>
        </div>
    )
}