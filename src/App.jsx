import React from 'react'
import Navigation from './components/Navigation/Navigation'
import "./App.css"
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='main_container'>
      <ContactHeader />
      <ContactForm />
      </div>
    </div>
  )
}

export default App
