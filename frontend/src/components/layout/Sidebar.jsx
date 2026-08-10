import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiGrid,
  FiDroplet,
  FiShield,
  FiAlertTriangle,
  FiFileText,
  FiSettings,
  FiInfo,
} from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: FiGrid },
  { label: 'Home', to: '/', icon: FiHome },
  { label: 'Rivers', to: '/rivers', icon: FiDroplet },
  { label: 'Dams', to: '/dams', icon: FiShield },
  { label: 'Prediction', to: '/prediction', icon: FiAlertTriangle },
  { label: 'Alerts', to: '/alerts', icon: FiFileText },
  { label: 'Reports', to: '/reports', icon: FiFileText },
  { label: 'Settings', to: '/settings', icon: FiSettings },
  { label: 'About', to: '/about', icon: FiInfo },
];

const Sidebar = ({ isOpen, onClose }) => (
  <>
    <aside
      className="d-none d-lg-flex flex-column bg-white border-end shadow-sm"
      style={{ width: 260, minHeight: '100vh', position: 'sticky', top: 0 }}
    >
      <div className="px-4 py-4 border-bottom">
        <div className="d-flex align-items-center gap-3">
          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }}>
            RF
          </div>
          <div>
            <h5 className="mb-0 fw-semibold">RiverFlow AI</h5>
            <small className="text-muted">Government command</small>
          </div>
        </div>
      </div>
      <nav className="nav flex-column px-2 py-3">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 rounded-3 px-3 py-2 mb-1 ${
                isActive ? 'bg-primary text-white' : 'text-secondary'
              }`
            }
            onClick={onClose}
          >
            <span className="d-inline-flex align-items-center justify-content-center" style={{ width: 28, height: 28 }}>
              <Icon size={18} />
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>

    <div
      className={`position-fixed top-0 start-0 vh-100 bg-white shadow-lg d-lg-none ${isOpen ? 'translate-middle-x-0' : 'translate-middle-x-n100'}`}
      style={{
        width: 280,
        zIndex: 1055,
        transition: 'transform 0.25s ease',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <div className="px-4 py-4 border-bottom">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h5 className="mb-0 fw-semibold">RiverFlow AI</h5>
            <small className="text-muted">Gov dashboard</small>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <nav className="nav flex-column px-2 py-3">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 rounded-3 px-3 py-2 mb-1 ${
                isActive ? 'bg-primary text-white' : 'text-secondary'
              }`
            }
            onClick={onClose}
          >
            <span className="d-inline-flex align-items-center justify-content-center" style={{ width: 28, height: 28 }}>
              <Icon size={18} />
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>

    {isOpen && (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-lg-none"
        style={{ zIndex: 1050 }}
        onClick={onClose}
      />
    )}
  </>
);

export default Sidebar;