import React from 'react'
import './Chatbot.css'

const Chatbot = () => {
  return (
    <div className='chatbot'>
      <h3>I AM A CHATBOT</h3>
      <div className="chat-display">
        <div className="chat-display-options">
            <h5>Choose your Query type-</h5>
            <p>Finances and payment related</p>
            <p>Subject availability, Credits and Code related</p>
            <p>Dates and deadline related</p>
            <p>Want to meet Anjula ma'am</p>
            <p>Others</p>
        </div>
      </div>
      <div className="chatbot-input-div">
        <input type="text" className='chatbot-input'/>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chatbot
