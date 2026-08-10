import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  FiDroplet,
  FiActivity,
  FiBell,
  FiCloudRain,
  FiMap,
  FiTrendingUp,
  FiShield,
  FiMoreHorizontal,
} from 'react-icons/fi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Home = () => {
  const overviewStats = [
    {
      title: 'Rivers',
      value: '128',
      icon: <FiDroplet size={24} />,
      detail: 'Monitored river segments',
      gradient: 'linear-gradient(135deg, #0d6efd 0%, #5b9cff 100%)',
    },
    {
      title: 'Dams',
      value: '57',
      icon: <FiShield size={24} />,
      detail: 'Active infrastructure',
      gradient: 'linear-gradient(135deg, #198754 0%, #6fdc8c 100%)',
    },
    {
      title: 'Reservoirs',
      value: '42',
      icon: <FiMap size={24} />,
      detail: 'Tracked reservoirs',
      gradient: 'linear-gradient(135deg, #fd7e14 0%, #ffc57d 100%)',
    },
    {
      title: 'Flood Alerts',
      value: '8',
      icon: <FiBell size={24} />,
      detail: 'Current high-priority warnings',
      gradient: 'linear-gradient(135deg, #dc3545 0%, #f16f79 100%)',
    },
  ];

  const weatherCards = [
    {
      title: 'Brahmaputra Basin',
      subtitle: 'Heavy showers expected',
      temperature: '27°C',
      humidity: '84%',
      wind: '18 km/h',
      accent: 'info',
      icon: <FiCloudRain size={20} />,
    },
    {
      title: 'Ganges Basin',
      subtitle: 'Cloudy with drizzle',
      temperature: '24°C',
      humidity: '78%',
      wind: '14 km/h',
      accent: 'primary',
      icon: <FiActivity size={20} />,
    },
    {
      title: 'Godavari Basin',
      subtitle: 'Stable conditions',
      temperature: '29°C',
      humidity: '71%',
      wind: '10 km/h',
      accent: 'success',
      icon: <FiTrendingUp size={20} />,
    },
  ];

  const alertItems = [
    {
      title: 'Guwahati level alert',
      description: 'Brahmaputra river gauge crossed danger mark.',
      badge: 'Critical',
      badgeClass: 'danger',
      time: '12 min ago',
    },
    {
      title: 'Hirakud refill update',
      description: 'Reservoir storage reached 92% capacity.',
      badge: 'Monitor',
      badgeClass: 'warning',
      time: '38 min ago',
    },
    {
      title: 'Mumbai rainfall notice',
      description: 'Heavy urban rain forecast for the next 4 hours.',
      badge: 'Notice',
      badgeClass: 'info',
      time: '55 min ago',
    },
  ];

  const predictionItems = [
    {
      region: 'Ganges Basin',
      status: 'Moderate flood risk',
      confidence: '22%',
    },
    {
      region: 'Mahanadi Basin',
      status: 'Reservoir refill expected',
      confidence: '14%',
    },
    {
      region: 'Brahmaputra Basin',
      status: 'High discharge forecast',
      confidence: '38%',
    },
  ];

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Water Level Index',
        data: [52, 55, 58, 62, 67, 69, 72],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.16)',
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: [48, 72, 124, 201, 282, 345],
        backgroundColor: 'rgba(25, 135, 84, 0.75)',
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        data: [56, 28, 16],
        backgroundColor: ['#0d6efd', '#ffc107', '#dc3545'],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <main className="home-page">
      <section
        className="py-5 text-white"
        style={{
          background: 'linear-gradient(135deg, #0d6efd 0%, #4b8eff 45%, #d8e7ff 100%)',
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="badge bg-white text-primary mb-3">National River Command</span>
              <h1 className="display-5 fw-bold mb-3">RiverFlow AI</h1>
              <p className="lead text-white-75 mb-4">
                Premium government dashboard for river operations, flood forecasting, and reservoir intelligence.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a href="/dashboard" className="btn btn-light btn-lg shadow">
                  View Dashboard
                </a>
                <a href="/prediction" className="btn btn-outline-light btn-lg shadow-sm">
                  Run Prediction
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h5 className="fw-semibold mb-1">Operational Pulse</h5>
                      <p className="text-muted mb-0">Current mission status and alerts.</p>
                    </div>
                    <span className="badge bg-success">Live</span>
                  </div>
                  <div className="row row-cols-2 g-3">
                    <div className="col">
                      <div className="rounded-4 bg-primary bg-opacity-10 p-3">
                        <p className="text-uppercase text-muted small mb-2">Basins</p>
                        <h4 className="mb-0">13</h4>
                      </div>
                    </div>
                    <div className="col">
                      <div className="rounded-4 bg-info bg-opacity-10 p-3">
                        <p className="text-uppercase text-muted small mb-2">Forecasts</p>
                        <h4 className="mb-0">27</h4>
                      </div>
                    </div>
                    <div className="col">
                      <div className="rounded-4 bg-warning bg-opacity-10 p-3">
                        <p className="text-uppercase text-muted small mb-2">Alerts</p>
                        <h4 className="mb-0">8</h4>
                      </div>
                    </div>
                    <div className="col">
                      <div className="rounded-4 bg-success bg-opacity-10 p-3">
                        <p className="text-uppercase text-muted small mb-2">Teams</p>
                        <h4 className="mb-0">14</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {overviewStats.map((stat) => (
              <div className="col-md-6 col-xl-3" key={stat.title}>
                <div
                  className="card text-white border-0 shadow-sm h-100"
                  style={{
                    background: stat.gradient,
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center justify-content-center rounded-4 bg-white bg-opacity-15" style={{ width: 52, height: 52 }}>
                        {stat.icon}
                      </div>
                      <span className="badge bg-white bg-opacity-25 text-white">{stat.title}</span>
                    </div>
                    <h2 className="fw-bold mb-2">{stat.value}</h2>
                    <p className="mb-0 text-white-75">{stat.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h5 className="card-title mb-1">Flood Alerts</h5>
                      <p className="text-muted mb-0">Latest warning events across river basins.</p>
                    </div>
                    <FiBell size={24} className="text-primary" />
                  </div>

                  <div className="list-group list-group-flush">
                    {alertItems.map((alert) => (
                      <div key={alert.title} className="list-group-item px-0 py-3 border-0">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h6 className="mb-1">{alert.title}</h6>
                            <p className="text-muted mb-1">{alert.description}</p>
                            <small className="text-muted">{alert.time}</small>
                          </div>
                          <span className={`badge bg-${alert.badgeClass} rounded-pill align-self-start`}>
                            {alert.badge}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                          <h5 className="card-title mb-1">River Monitoring</h5>
                          <p className="text-muted mb-0">Live gauge and flow performance.</p>
                        </div>
                        <FiDroplet size={24} className="text-primary" />
                      </div>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Ganges Gauge</span>
                          <strong>6.8 m</strong>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '78%' }} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Brahmaputra Gauge</span>
                          <strong>7.4 m</strong>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                          <div className="progress-bar bg-success" role="progressbar" style={{ width: '84%' }} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Godavari Gauge</span>
                          <strong>5.1 m</strong>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '62%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                          <h5 className="card-title mb-1">Weather Conditions</h5>
                          <p className="text-muted mb-0">Forecast and humidity for critical basins.</p>
                        </div>
                        <FiCloudRain size={24} className="text-info" />
                      </div>

                      {weatherCards.map((weather) => (
                        <div key={weather.title} className="mb-4 pb-3 border-bottom">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div>
                              <h6 className="mb-1">{weather.title}</h6>
                              <p className="text-muted mb-0">{weather.subtitle}</p>
                            </div>
                            <div className={`text-${weather.accent}`}>{weather.icon}</div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <p className="mb-1 fw-semibold">{weather.temperature}</p>
                              <small className="text-muted">Humidity {weather.humidity}</small>
                            </div>
                            <small className="text-muted">{weather.wind}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                          <h5 className="card-title mb-1">Recent Predictions</h5>
                          <p className="text-muted mb-0">AI forecast summary for priority basins.</p>
                        </div>
                        <FiTrendingUp size={24} className="text-success" />
                      </div>

                      <div className="table-responsive">
                        <table className="table table-borderless align-middle mb-0">
                          <thead className="text-uppercase text-muted small">
                            <tr>
                              <th>Region</th>
                              <th>Status</th>
                              <th className="text-end">Confidence</th>
                            </tr>
                          </thead>
                          <tbody>
                            {predictionItems.map((item) => (
                              <tr key={item.region}>
                                <td>{item.region}</td>
                                <td>{item.status}</td>
                                <td className="text-end fw-semibold">{item.confidence}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-7">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h5 className="card-title mb-1">Water Level Trend</h5>
                      <p className="text-muted mb-0">Seven-day analysis of river height and flood pressure.</p>
                    </div>
                    <span className="badge bg-primary">Trend</span>
                  </div>
                  <div style={{ minHeight: '320px' }}>
                    <Line
                      data={lineData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: false },
                          tooltip: { mode: 'index', intersect: false },
                        },
                        scales: {
                          x: { grid: { display: false } },
                          y: { ticks: { callback: (value) => `${value} m` } },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div className="card border-0 shadow-sm rounded-4 mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h5 className="card-title mb-1">Flood Risk Index</h5>
                      <p className="text-muted mb-0">Probability tiers for national basins.</p>
                    </div>
                    <FiMoreHorizontal size={24} className="text-muted" />
                  </div>
                  <div style={{ minHeight: '260px' }}>
                    <Doughnut
                      data={doughnutData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: 'bottom' } },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h5 className="card-title mb-1">Rainfall Distribution</h5>
                      <p className="text-muted mb-0">Monthly precipitation across monitored zones.</p>
                    </div>
                    <span className="badge bg-info text-dark">Rain</span>
                  </div>
                  <div style={{ minHeight: '220px' }}>
                    <Bar
                      data={barData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: false },
                          tooltip: { callbacks: { label: (ctx) => `${ctx.parsed.y} mm` } },
                        },
                        scales: {
                          x: { grid: { display: false } },
                          y: { beginAtZero: true },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;