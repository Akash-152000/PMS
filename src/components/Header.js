import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo"><h1>BlueOrb</h1></div>
      <div className="header-right-details">
        <div className="header-profile-image">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width={50} height={50} alt="" />
        </div>
        <div className="header-profile-name">
          <p>Akash Yadav</p>
        </div>
      </div>
    </div>
  )
}

export default Header