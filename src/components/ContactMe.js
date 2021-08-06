import React from "react";



function ContactMe(props) {
    return(
        <>
        
        <p id="contactContainer">
        <h2 id="contactH2">Name</h2>
        <input type="input" id="name" name="name" required minlength="4" maxlength="24"/>
        <h2 id="contactH2">Email</h2>
        <input type="input" id="email" name="email" required minlength="8" maxlength="32"/>
        <h2 id="contactH2">Message</h2>
        <textarea type="input" id="message" name="message" required rows="6" cols="50"></textarea>
        <button id="resumeButton">Submit</button>
        </p>
        
        </>
    )
}

export default ContactMe;