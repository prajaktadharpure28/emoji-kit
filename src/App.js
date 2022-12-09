import React, { useState } from 'react'
import "./App.css"

function App() {

  const [emoji, setEmoji] = useState("🍕")
  const [emojiColor, setEmojiColor] = useState("white")

  return (
    <div className="container">
      <div className='app-title-container'>
        <h1 className='app-title'>🥳Emoji Kit</h1>
      </div>

      <div className='emoji-editor-container'>
        <div>
          <div className='main-emoji-container' style={{backgroundColor: emojiColor}}>
            <div className='main-emoji'>
              {emoji}
            </div>
          </div>

          <div className='emoji-container'>
            <div className='emoji-item' onClick={() => { setEmoji('🍕') }}>🍕</div>
            <div className='emoji-item' onClick={() => { setEmoji('🥪') }}>🥪</div>
            <div className='emoji-item' onClick={() => { setEmoji('🍟') }}>🍟</div>
            <div className='emoji-item' onClick={() => { setEmoji('🍔') }}>🍔</div>
            <div className='emoji-item' onClick={() => { setEmoji('🍿') }}>🍿</div>
          </div>
        </div>

        <div>
          <h1>Editing</h1>
          <div className='colors-container'>
            <div className='color-item bg-red' onClick={()=>{setEmojiColor("red")}}></div>
            <div className='color-item bg-green' onClick={()=>{setEmojiColor("green")}}></div>
            <div className='color-item bg-blue' onClick={()=>{setEmojiColor("blue")}}></div>
            <div className='color-item bg-yellow' onClick={()=>{setEmojiColor("yellow")}}></div>
            <div className='color-item bg-purple' onClick={()=>{setEmojiColor("purple")}}></div>
            <div className='color-item bg-black' onClick={()=>{setEmojiColor("black")}}></div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default App