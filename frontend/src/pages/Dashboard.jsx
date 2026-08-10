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
  FiShield,
  FiMap,
  FiAlertTriangle,
  FiTrendingUp,
  FiBarChart2,
  FiClock,
  FiActivity,
  FiCheckCircle,
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

const topMetrics = [
  {
    label: 'Rivers monitored',
    value: '128',
    icon: <FiDroplet size={22} />,
    badge: 'Live',
    color: 'primary',
  },
  {
    label: 'Dams active',
    value: '57',
    icon: <FiShield size={22} />,
    badge: 'Stable',
    color: 'success',
  },
  {
    label: 'Reservoir capacity',
    value: '86%',
    icon: <FiMap size={22} />,
    badge: 'Current',
    color: 'info',
  },
  {
    label: 'Flood alerts',
    value: '8',
    icon: <FiAlertTriangle size={22} />,
    badge: 'High',
    color: 'danger',
  },
];

const waterLevels = [
  {
    label: 'Ganges Gauge',
    value: '6.8 m',
    progress: 78,
    variant: 'primary',
  },
  {
    label: 'Brahmaputra Gauge',
    value: '7.4 m',
    progress: 84,
    variant: 'success',
  },
  {
    label: 'Godavari Gauge',
    value: '5.1 m',
    progress: 62,
    variant: 'warning',
  },
];

const alerts = [
  {
    title: 'Brahmaputra level alert',
    message: 'Gauge reading crossed danger threshold at Guwahati.',
    badge: 'Critical',
    badgeClass: 'danger',
    time: '12 min ago',
  },
  {
    title: 'Hirakud reservoir update',
    message: 'Storage reached 92% capacity after heavy inflow.',
    badge: 'Monitor',
    badgeClass: 'warning',
    time: '40 min ago',
  },
  {
    title: 'Mumbai rainfall advisory',
    message: 'Heavy urban rain expected through evening.',
    badge: 'Notice',
    badgeClass: 'info',
    time: '1 hr ago',
  },
];

const predictionSummary = [
  { region: 'Ganges Basin', risk: 'Moderate', confidence: '22%' },
  { region: 'Brahmaputra Basin', risk: 'High', confidence: '38%' },
  { region: 'Godavari Basin', risk: 'Low', confidence: '11%' },
];

const waterLevelData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Water level index',
      data: [54, 57, 60, 64, 69, 71, 74],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.18)',
      fill: true,
      tension: 0.35,
      pointRadius: 3,
    },
  ],
};

const rainfallData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Rainfall (mm)',
      data: [48, 62, 96, 145, 210, 265],
      backgroundColor: 'rgba(25, 135, 84, 0.75)',
      borderRadius: 8,
    },
  ],
};

const riskData = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      data: [56, 28, 16],
      backgroundColor: ['#0d6efd', '#ffc107', '#dc3545'],
      hoverOffset: 6,
    },
  ],
};

const Dashboard = () => (
  <main className="dashboard-page">
    <div className="container-fluid py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h1 className="h3 fw-bold mb-1">RiverFlow AI Dashboard</h1>
          <p className="text-muted mb-0">
            National water operations analytics for river monitoring, flood risk and dam management.
          </p>
        </div>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-secondary">Refresh</button>
          <button type="button" className="btn btn-primary">Export</button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {topMetrics.map((metric) => (
          <div className="col-sm-6 col-xl-3" key={metric.label}>
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className={`text-${metric.color} bg-${metric.color} bg-opacity-10 rounded-4 p-2`}>
                    {metric.icon}
                  </div>
                  <span className={`badge bg-${metric.color} bg-opacity-15 text-${metric.color}`}>
                    {metric.badge}
                  </span>
                </div>
                <h2 className="fw-bold mb-1">{metric.value}</h2>
                <p className="text-muted mb-0">{metric.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 mb-4">
        <div className="col-xl-8">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">Water Level Trend</h5>
                  <p className="text-muted mb-0">Seven-day river level movement across primary basins.</p>
                </div>
                <span className="badge bg-primary">Analytics</span>
              </div>
              <div style={{ minHeight: '320px' }}>
                <Line
                  data={waterLevelData}
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

        <div className="col-xl-4">
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">Flood Prediction Summary</h5>
                  <p className="text-muted mb-0">AI-driven probability ratings for critical river basins.</p>
                </div>
                <FiTrendingUp size={24} className="text-success" />
              </div>
              <div className="list-group list-group-flush">
                {predictionSummary.map((item) => (
                  <div key={item.region} className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{item.region}</h6>
                        <small className="text-muted">{item.risk}</small>
                      </div>
                      <span className="fw-semibold">{item.confidence}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">Risk Distribution</h5>
                  <p className="text-muted mb-0">National flood risk segmentation.</p>
                </div>
                <span className="badge bg-warning text-dark">Priority</span>
              </div>
              <div style={{ minHeight: '260px' }}>
                <Doughnut
                  data={riskData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { position: 'bottom' },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-xl-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">River Statistics</h5>
                  <p className="text-muted mb-0">Current gauge performance and basin health.</p>
                </div>
                <FiActivity size={24} className="text-primary" />
              </div>
              {waterLevels.map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                  <div className="progress" style={{ height: '10px' }}>
                    <div
                      className={`progress-bar bg-${item.variant}`}
                      role="progressbar"
                      style={{ width: `${item.progress}%` }}
                      aria-valuenow={item.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-xl-8">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">Rainfall Analytics</h5>
                  <p className="text-muted mb-0">Monthly precipitation trends for key river zones.</p>
                </div>
                <span className="badge bg-info text-dark">Weather</span>
              </div>
              <div style={{ minHeight: '320px' }}>
                <Bar
                  data={rainfallData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: { callbacks: { label: (context) => `${context.parsed.y} mm` } },
                    },
                    scales: {
                      x: { grid: { display: false } },
                      y: {
                        beginAtZero: true,
                        ticks: { callback: (value) => `${value}` },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-xl-6">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">Recent Alerts</h5>
                  <p className="text-muted mb-0">Active notifications requiring field response.</p>
                </div>
                <span className="badge bg-danger">Alerts</span>
              </div>
              <div className="list-group list-group-flush">
                {alerts.map((alert) => (
                  <div key={alert.title} className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-1">{alert.title}</h6>
                        <p className="text-muted mb-1">{alert.message}</p>
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

        <div className="col-xl-6">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="card-title mb-1">River Status Table</h5>
                  <p className="text-muted mb-0">Operational status across monitored river systems.</p>
                </div>
                <FiCheckCircle size={24} className="text-success" />
              </div>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead className="text-uppercase text-muted small">
                    <tr>
                      <th>River</th>
                      <th>Status</th>
                      <th>Flow</th>
                      <th className="text-end">Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ganges</td>
                      <td><span className="badge bg-success">Stable</span></td>
                      <td>6.8 m</td>
                      <td className="text-end">7.0 m</td>
                    </tr>
                    <tr>
                      <td>Brahmaputra</td>
                      <td><span className="badge bg-warning text-dark">Watch</span></td>
                      <td>7.4 m</td>
                      <td className="text-end">7.8 m</td>
                    </tr>
                    <tr>
                      <td>Godavari</td>
                      <td><span className="badge bg-success">Normal</span></td>
                      <td>5.1 m</td>
                      <td className="text-end">5.6 m</td>
                    </tr>
                    <tr>
                      <td>Krishna</td>
                      <td><span className="badge bg-info text-dark">Monitor</span></td>
                      <td>4.8 m</td>
                      <td className="text-end">5.0 m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Dashboard;