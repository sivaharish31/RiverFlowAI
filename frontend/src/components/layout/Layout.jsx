import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="layout-wrapper" style={{ minHeight: '100vh', backgroundColor: '#f4f7ff' }}>
      <Navbar onToggleSidebar={handleToggleSidebar} />

      <div className="container-fluid" style={{ paddingTop: '72px' }}>
        <div className="row gx-0">
          <div className="col-12 col-md-auto">
            <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
          </div>

          <div className="col">
            <main className="px-3 px-md-4 pb-4">
              <Header />
              <section className="mb-4">
                <Outlet />
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;