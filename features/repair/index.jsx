import React from 'react'
import RepairProcess from './components/RepairProcess'
import RepairVideoSection from './components/RepairVideoSection'
import RepairService from './components/RepairService'
import RepairBooking from './components/RepairBooking'
const index = () => {
  return (
    <div>
      <RepairProcess />
      <RepairVideoSection />
      <RepairService />
      <RepairBooking />
    </div>
  )
}

export default index
