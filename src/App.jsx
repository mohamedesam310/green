import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import PredictionPage from './pages/PredictionPage';
import PredictionDetailsPage from './pages/PredictionDetailsPage';
import './index.css';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

function App() {
  return (
    <AuthProvider>
      <Router basename={routerBasename}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PredictionPage />} />
              <Route path="/prediction" element={<PredictionPage />} />
              <Route path="/prediction/:matchId" element={<PredictionDetailsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
