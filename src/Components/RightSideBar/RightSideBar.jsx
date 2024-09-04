import React from 'react'
import './RightSideBar.css'
import assets from '../../assets/assets'

const RightSideBar = () => {
  return (
    <div className='rightSide'>
      <div className="rightSideProfile">
        <img src={assets.profile_img} alt="" />
        <h3>Amoo Esther <img src={assets.green_dot} alt="" className='dot'/></h3>
        <p>hey there! im using chattier</p>
      </div>
      <hr />
      <div className="rightSideMedia">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default RightSideBar