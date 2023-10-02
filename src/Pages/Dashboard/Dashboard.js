import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Dashboard.css'
import DataTable from '../../Components/Table/Table'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <NavBar/>
        <div className='datatable'><DataTable/></div>
    </div>
  )
}

export default Dashboard