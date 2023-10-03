import React from 'react'
import './Dashboard.css'
import DataTable from '../../Components/Table/Table'
import Nav from '../../Components/Nav/Nav'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Nav/>
        <div className='datatable'><DataTable/></div>
    </div>
  )
}

export default Dashboard