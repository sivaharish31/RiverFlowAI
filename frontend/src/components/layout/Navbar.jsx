import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiBell, FiUser, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ onToggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);
  const toggleDarkMode = () => setDarkMode((value) => !value);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm fixed-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-link text-white d-md-none me-2"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <FiMenu size={24} />
          </button>

          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <div
              className="rounded-circle bg-white d-flex align-items-center justify-content-center"
              style={{ width: 36, height: 36 }}
            >
              <span className="text-primary fw-bold">R</span>
            </div>
            <span className="fw-semibold">RiverFlow AI</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : 'text-white'}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : 'text-white'}`
                }
                onClick={closeMenu}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : 'text-white'}`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : 'text-white'}`
                }
                onClick={closeMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn btn-outline-light btn-sm rounded-circle p-2"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button type="button" className="btn btn-outline-light btn-sm rounded-circle p-2">
            <FiBell size={18} />
          </button>

          <button type="button" className="btn btn-outline-light btn-sm rounded-circle p-2">
            <FiUser size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;