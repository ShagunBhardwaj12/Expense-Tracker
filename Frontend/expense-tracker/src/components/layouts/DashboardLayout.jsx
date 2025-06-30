import React from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children, activeMenu }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeMenu={activeMenu} />
      <div className="flex pt-16">
        <SideMenu activeMenu={activeMenu} />
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;