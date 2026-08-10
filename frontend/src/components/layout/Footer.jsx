import React from 'react';

const Footer = () => (
  <footer className="footer mt-auto py-4 bg-white border-top">
    <div className="container-fluid">
      <div className="row align-items-center gy-2">
        <div className="col-md-4 text-center text-md-start">
          <span className="fw-semibold">RiverFlow AI</span>
        </div>
        <div className="col-md-4 text-center">
          <small className="text-muted">
            © {new Date().getFullYear()} RiverFlow AI. All rights reserved.
          </small>
        </div>
        <div className="col-md-4 text-center text-md-end">
          <small className="text-muted">
            v1.0.0 · Team Delta
          </small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;