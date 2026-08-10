import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Prediction from '../pages/Prediction';

const Login = () => (
  <div className="container py-5">
    <h1 className="h3">Login</h1>
    <p className="text-muted">Sign in to access RiverFlow AI.</p>
  </div>
);

const NotFound = () => (
  <div className="container py-5">
    <h1 className="h3">404</h1>
    <p className="text-muted">The requested page could not be found.</p>
  </div>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="prediction" element={<Prediction />} />
    </Route>

    <Route path="login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;