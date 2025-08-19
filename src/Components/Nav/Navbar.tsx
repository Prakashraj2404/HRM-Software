import React from 'react'
import Logo from '../../assets/Navbar/yohologo.png'
import NotificationIcon from '../../assets/Navbar/notification.png'

const Navbar = () => {
  return (
<div className="flex justify-between items-center text-white px-6 py-3">
  {/* Logo */}
  <img src={Logo} alt="Logo" className="w-[120px]" />

  {/* Right Side */}
  <div className="flex items-center gap-6">
    {/* Department Section */}
    <section className="flex items-center gap-3 bg-[#4A7079] rounded-lg **:p-3 **:px-6">
      <p className="bg-white text-[#4A7079] font-semibold px-3 py-1 rounded-lg">HR</p>
      <p>Department</p>
      <p>Employee</p>
    </section>

    {/* Notification Icons */}
    <section className="flex items-center gap-3">
      <div className="flex items-center justify-center cursor-pointer bg-[#4A7079] p-3 rounded-full">
        <img src={NotificationIcon} alt="Notification" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center cursor-pointer bg-[#4A7079] p-3 rounded-full">
        <img src={NotificationIcon} alt="Notification" className="w-6 h-6" />
      </div>
    </section>
  </div>
</div>
  )
}

export default Navbar