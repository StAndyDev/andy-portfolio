import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioDetailsPage from './pages/PortfolioDetailsPage';
import MainContentPage from './pages/MainContentPage';
import NotFound from './pages/errors/NotFound';
import MainParentPage from './pages/MainParentPage';
import './styles/style.css';
import { useState, useEffect } from 'react';
import { tailChase } from 'ldrs';
import { ThemeProvider } from './ThemeContext'; // pour appliquer le context (notre theme)

export default function App() {
  const [colorLoader, setColorLoader] = useState('');
  useEffect(() => {
    tailChase.register('my-loader');    /*loaders*/
    let rootStyles = getComputedStyle(document.documentElement);
    let colorBlue = rootStyles.getPropertyValue('--color-blue');
    // loader
    window.addEventListener('load', function () {
      setTimeout(function () {
        document.querySelector('.loader-content').style.display = 'none';
      }, 200);
    });
    // color loader
    setColorLoader(colorBlue);
  }, []);

  return (
    <div>
      <div className='loader-content'>
        <div className='loader-parent'>
          <my-loader
            size="75"
            speed="1.75"
            color={colorLoader}
          ></my-loader>
          <div className='loader-text'>--___--</div>
        </div>

      </div>

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="" element={<MainParentPage />}>
              <Route path="" element={<MainContentPage />} />
              <Route path="/project/details/:cardId" element={<PortfolioDetailsPage />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();