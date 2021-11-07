import React from 'react'
import ReservationForm from '../components/ReservationForm'
import ContactpageContact from '../sections/contact/ContactpageContact'
import ContactpageHeader from '../sections/contact/ContactpageHeader'

function Contact() {
    return (
        <div className="contactpage">
            <ContactpageHeader />
            <ContactpageContact />
            <ReservationForm />
        </div>
    )
}

export default Contact
