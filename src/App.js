import React from 'react'
import "./App.css"

function App() {
  return (
    <div className="container">
      <div className='app-title-container'>
        <h1 className='app-title'>🥳Emoji Kit</h1>
      </div>
      <div className='main-emoji-container'>
        <div className='main-emoji'>
          🏆
        </div>
      </div>
      <div className='emoji-container'>
        <div className='emoji-item'>🏆</div>
        <div className='emoji-item'>🎯</div>
        <div className='emoji-item'>👍</div>
        <div className='emoji-item'>🤩</div>
        <div className='emoji-item'>🍕</div>
      </div>
    </div>
  )
}

export default App