import React from 'react'
import  NavigationBar from '../Components/NavigationBar/NavigationBar'
const AdminPanel = () => {
  return (
    <div className="flex">
    <NavigationBar />
    <main className="flex-1 p-6">
      {/* Main Content Here */}
    </main>
  </div>
  )
}

export default AdminPanel



