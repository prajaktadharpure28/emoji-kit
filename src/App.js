import React, { useState } from 'react'
import "./App.css"

function App() {

  const [emoji, setEmoji] = useState("ð")
  const [emojiColor, setEmojiColor] = useState("white")
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <div className="container">
      <div className='app-title-container'>
        <h1 className='app-title'>ð¥³Emoji Kit</h1>
      </div>

      <div className='emoji-editor-container'>
        <div>
          <div className='main-emoji-container' style={{ backgroundColor: emojiColor, transform: `rotate(${emojiDeg*3.6}deg)` }}>
            <div className='main-emoji' style={{ fontSize: `${emojiSize * 2}px` }}>
              {emoji}
            </div>
          </div>

          <div className='emoji-container'>
            <div className='emoji-item' onClick={() => { setEmoji('ð') }}>ð</div>
            <div className='emoji-item' onClick={() => { setEmoji('ð¥ª') }}>ð¥ª</div>
            <div className='emoji-item' onClick={() => { setEmoji('ð') }}>ð</div>
            <div className='emoji-item' onClick={() => { setEmoji('ð') }}>ð</div>
            <div className='emoji-item' onClick={() => { setEmoji('ð¿') }}>ð¿</div>
          </div>
        </div>

        <div>
          <div className='colors-container'>
            <div className='color-item bg-red' onClick={() => { setEmojiColor("red") }}></div>
            <div className='color-item bg-green' onClick={() => { setEmojiColor("green") }}></div>
            <div className='color-item bg-blue' onClick={() => { setEmojiColor("blue") }}></div>
            <div className='color-item bg-yellow' onClick={() => { setEmojiColor("yellow") }}></div>
            <div className='color-item bg-purple' onClick={() => { setEmojiColor("purple") }}></div>
            <div className='color-item bg-black' onClick={() => { setEmojiColor("black") }}></div>
          </div>
          <div className='size-container'>
            <input type='range' className='size-slider' onChange={(e) => { setEmojiSize(e.target.value) }} />
          </div>
          <div className='size-container'>
            <input type='range' className='size-slider' onChange={(e) => { setEmojiDeg(e.target.value) }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App