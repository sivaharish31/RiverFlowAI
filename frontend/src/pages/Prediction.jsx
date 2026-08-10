import React, { useState } from 'react';

const Prediction = () => {
  const [form, setForm] = useState({
    state: '',
    river: '',
    dam: '',
    rainfall: '',
    temperature: '',
    humidity: '',
    waterLevel: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const rainfallValue = Number(form.rainfall) || 0;
    const temperatureValue = Number(form.temperature) || 0;
    const humidityValue = Number(form.humidity) || 0;
    const waterLevelValue = Number(form.waterLevel) || 0;

    const floodScore = Math.min(100, Math.max(0, Math.round((rainfallValue * 1.2 + waterLevelValue * 1.5 + humidityValue * 0.9) / 4)));
    const droughtScore = Math.min(100, Math.max(0, Math.round((100 - rainfallValue) * 0.6 + temperatureValue * 0.8 - humidityValue * 0.4)));
    const riskLabel = floodScore > 70 ? 'High risk' : floodScore > 40 ? 'Moderate risk' : 'Low risk';
    const recommendation = floodScore > 70
      ? 'Activate flood response protocols and monitor river gauges closely.'
      : floodScore > 40
      ? 'Increase surveillance and prepare local teams for possible evacuation.'
      : 'Continue regular monitoring and maintain readiness for changing conditions.';

    setResult({
      flood: floodScore,
      drought: Math.max(0, Math.min(100, 100 - floodScore)),
      risk: riskLabel,
      recommendation,
    });
  };

  return (
    <main className="prediction-page">
      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-xl-6">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <h3 className="h5 mb-1">Flood Prediction Form</h3>
                    <p className="text-muted mb-0">Submit environmental and infrastructure data for a quick forecast.</p>
                  </div>
                  <span className="badge bg-primary">Live model</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Uttar Pradesh"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">River</label>
                      <input
                        type="text"
                        name="river"
                        value={form.river}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Ganges"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Dam</label>
                      <input
                        type="text"
                        name="dam"
                        value={form.dam}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Tehri Dam"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Rainfall (mm)</label>
                      <input
                        type="number"
                        name="rainfall"
                        value={form.rainfall}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="0"
                        min="0"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Temperature (°C)</label>
                      <input
                        type="number"
                        name="temperature"
                        value={form.temperature}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="25"
                        step="0.1"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Humidity (%)</label>
                      <input
                        type="number"
                        name="humidity"
                        value={form.humidity}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="70"
                        min="0"
                        max="100"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Water Level (m)</label>
                      <input
                        type="number"
                        name="waterLevel"
                        value={form.waterLevel}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="5.6"
                        step="0.1"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Predict
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <h3 className="h5 mb-1">Prediction Result</h3>
                    <p className="text-muted mb-0">Result summary and suggested action.</p>
                  </div>
                  <span className="badge bg-secondary">Summary</span>
                </div>

                {result ? (
                  <>
                    <div className="row g-3 mb-4">
                      <div className="col-sm-6">
                        <div className="card border-0 rounded-4 bg-light h-100">
                          <div className="card-body">
                            <p className="text-uppercase text-muted mb-2 small">Flood Probability</p>
                            <h2 className="fw-bold">{result.flood}%</h2>
                            <div className="progress mt-3" style={{ height: '10px' }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: `${result.flood}%` }}
                                aria-valuenow={result.flood}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card border-0 rounded-4 bg-light h-100">
                          <div className="card-body">
                            <p className="text-uppercase text-muted mb-2 small">Drought Probability</p>
                            <h2 className="fw-bold">{result.drought}%</h2>
                            <div className="progress mt-3" style={{ height: '10px' }}>
                              <div
                                className={`progress-bar ${result.drought > 60 ? 'bg-warning' : 'bg-success'}`}
                                role="progressbar"
                                style={{ width: `${result.drought}%` }}
                                aria-valuenow={result.drought}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card border-0 rounded-4 mb-4">
                      <div className="card-body">
                        <p className="text-uppercase text-muted mb-2 small">Risk</p>
                        <h4 className="fw-bold mb-0">{result.risk}</h4>
                      </div>
                    </div>

                    <div className="card border-0 rounded-4 bg-primary text-white">
                      <div className="card-body">
                        <p className="text-uppercase text-white-50 mb-2 small">Recommendation</p>
                        <p className="mb-0">{result.recommendation}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="text-center text-muted">
                      <p className="mb-2">No prediction generated yet.</p>
                      <p className="small">Fill out the form to view flood and drought risk estimates.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Prediction;