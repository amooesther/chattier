import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chatBox'>
      <div className="chatUser">
        <img src={assets.profile_img} alt="" />
        <p>Amoo Esther <img src={assets.green_dot} alt="" className='dot'/></p>
        <img src={assets.help_icon} alt="" className='help'/>
      </div>
      <div className="chatMessage">
        <div className="senderMessage">
<p className="message">Lorem ipsum dolor sit amet.</p>
<div>
  <img src={assets.profile_img} alt="" />
  <p>2:30pm</p>
</div>
        </div>
        <div className="senderMessage">
<img className='messageImg' src={assets.pic1} alt="" />
<div>
  <img src={assets.profile_img} alt="" />
  <p>2:30pm</p>
</div>
        </div>
        <div className="receiverMessage">
<p className="message">Lorem ipsum dolor sit amet.</p>
<div>
  <img src={assets.profile_img} alt="" />
  <p>2:30pm</p>
</div>
        </div>
      </div>
      <div className="chatInput">
        <input type="text" placeholder='send a message'/>
        <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox