
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MortgageCalculatorPage from './pages/MortgageCalculatorPage';
import AboutUsPage from './pages/AboutUsPage';
import AIPoweredPage from './pages/AIPoweredPage';
import { ThemeProvider } from './contexts/ThemeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/ai-powered" element={<AIPoweredPage />} />
            <Route path="/start" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;