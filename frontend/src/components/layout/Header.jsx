import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

const formatTime = (date) =>
  new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);

const greetingText = (hours) => {
  if (hours < 12) return 'Good morning';
  if (hours < 18) return 'Good afternoon';
  return 'Good evening';
};

const Header = ({ title = 'Dashboard', subtitle = 'Government river operations command center', breadcrumbs = [] }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const trail = useMemo(() => [{ label: 'Home', to: '/' }, ...breadcrumbs], [breadcrumbs]);
  const greeting = greetingText(now.getHours());

  return (
    <header className="bg-white border-bottom py-4 mb-4 shadow-sm">
      <div className="container-fluid">
        <div className="row align-items-center gy-3">
          <div className="col-lg-7">
            <p className="text-uppercase text-primary fw-semibold mb-2">Government River Operations</p>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-3">
              <div>
                <h1 className="h3 fw-bold mb-1">{title}</h1>
                <p className="text-muted mb-0">{subtitle}</p>
              </div>
              <div className="bg-light rounded-4 px-4 py-3">
                <span className="text-muted small">Welcome back,</span>
                <div className="fw-semibold">{greeting}</div>
              </div>
            </div>

            <nav aria-label="breadcrumb" className="mt-4">
              <ol className="breadcrumb mb-0">
                {trail.map((item, index) => {
                  const isLast = index === trail.length - 1;
                  return (
                    <li
                      key={`${item.label}-${index}`}
                      className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {isLast ? (
                        item.label
                      ) : (
                        <Link to={item.to} className="text-decoration-none">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>

          <div className="col-lg-5 text-lg-end">
            <div className="bg-primary bg-opacity-10 rounded-4 p-3 h-100">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-3">
                <div>
                  <span className="d-block text-muted small text-uppercase">Current date</span>
                  <div className="fw-semibold">{formatDate(now)}</div>
                </div>
                <div>
                  <span className="d-block text-muted small text-uppercase">Current time</span>
                  <div className="fw-semibold">{formatTime(now)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;