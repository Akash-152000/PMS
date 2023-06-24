import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Sidebar/>
        <Dashboard/>
        
    </div>
  )
}

export default Home