import React from 'react'
import './LeftSideBar.css'
import assets from '../../assets/assets'
const LeftSideBar = () => {
  return (
    <div className='leftSide'>
      <div className="leftSideTop">
        <div className="leftSideNav">
<img src={assets.logo} alt="" className='logo'/>
<div className="menu">
  <img src={assets.menu_icon} alt="" />
  <div className="subMenu">
    <p>Edit profile</p>
    <hr />
    <p>Logout</p>
  </div>
</div>
        </div>
        <div className="leftSideSearch">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='search here'/>
        </div>
      </div>
      <div className="LeftSideList">
        {Array(12).fill("").map((item,index)=>(
          <div key={index} className="friends">
          <img src={assets.profile_img} alt="" />
          <div>
            <p>Amoo Esther</p>
            <span>Hello, how are you?</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar