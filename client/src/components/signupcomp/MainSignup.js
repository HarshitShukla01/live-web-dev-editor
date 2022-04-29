import React from 'react'
import Demo from './demo'

const MainSignup = ({
    nameField,
    emailField,
    passField,
    conPassField,
    setNameField,
    setEmailField,
    setPassField,
    setConPassField,
    registerUser
}) => {
    return (
        
        <Demo 
        nameField={nameField}
        emailField={emailField}
        passField={passField}
        conPassField={conPassField}
        setNameField={setNameField}
        setEmailField={setEmailField}
        setPassField={setPassField}
        setConPassField={setConPassField}
        registerUser={registerUser}
     />
    
  )
}

export default MainSignup