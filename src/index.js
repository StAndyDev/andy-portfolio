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
import ScrollReveal from 'scrollreveal'; // animation on scroll

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

    //  ==== animation on scroll ====
    // section-title animation
    ScrollReveal().reveal('.section-title_animation', {
      distance: '80px',
      duration: 500,
      delay: 100,
      easing: 'ease-out',
      origin: 'top',
      scale: 0.8,
      opacity: 0,
      reset: true,
      interval: 0,
    });

    // about animation
    ScrollReveal().reveal('.about-content_animation', {
      distance: '80px',
      duration: 1000,
      delay: 300,
      origin: 'left',
      scale: 0.8,
      easing: 'ease-out',
      opacity: 0,
      reset: true
    });
    ScrollReveal().reveal('.sphere-content_animation', {
      duration: 1500,
      delay: 300,
      distance: "0px",
      opacity: 0,
      easing: "ease-in-out",
      reset: true,
    });
    // carousel animation
    ScrollReveal().reveal('.carousel_animation', {
      distance: '100px',
      duration: 300,
      delay: 300,
      easing: 'ease',
      origin: 'bottom',
      opacity: 0,
      reset: true,
      interval: 300,
    });

    // home animation
    ScrollReveal().reveal('.home-img_animation', {
      distance: '80px',
      duration: 1000,
      delay: 300,
      origin: 'left',
      scale: 0.8,
      easing: 'ease-out',
      opacity: 0,
      reset: true
    });

    ScrollReveal().reveal('.home-intro_animation', {
      distance: '80px',
      duration: 1000,
      delay: 300,
      origin: 'right',
      scale: 0.8,
      easing: 'ease-out',
      opacity: 0,
      reset: true
    });
    // social-icons animation
    ScrollReveal().reveal('.social-icons_animation', {
      distance: '100px',
      duration: 300,
      delay: 500,
      easing: 'ease',
      origin: 'bottom',
      opacity: 0,
      reset: true,
      interval: 300,
    });

    // service animation
    ScrollReveal().reveal('.service_animation', {
      distance: '100px',
      duration: 500,
      delay: 300,
      easing: 'ease-in-out',
      origin: 'left',
      opacity: 0,
      reset: true,
      interval: 300,
    });
    // portfolio animation
    ScrollReveal().reveal('.portfolio_animation', {
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease',
      origin: 'bottom',
      opacity: 0,
      reset: true,
      interval: 300,
      viewFactor: -0.3,
    });

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