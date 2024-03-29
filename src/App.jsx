import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import AppRoutes from './router/AppRoutes'; // Import AppRoutes

function App() {
  return (
    <BrowserRouter>
        <Layout>
         <AppRoutes />
        </Layout>
    </BrowserRouter>
  );
}

export default App;
