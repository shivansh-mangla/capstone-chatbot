import React from 'react'
import './Chatbot.css'

const Chatbot = () => {
  return (
    <div className='chatbot'>
      <h3>I AM A CHATBOT</h3>
      <div className="chat-display">
        <p>u hb</p>
      </div>
      <div className="chatbot-input-div">
        <input type="text" className='chatbot-input'/>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chatbot
