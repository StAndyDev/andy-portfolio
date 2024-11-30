import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioDetailsPage from './pages/PortfolioDetailsPage';
import MainContentPage from './pages/MainContentPage';
import NotFound from './pages/errors/NotFound';
import MainParentPage from './pages/MainParentPage';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* il faut imbriquer les autres routes sous MainPage */}

        <Route path="/" element={<MainPage />}>
            <Route path="" element={<MainParentPage />}>
              <Route path="" element={<MainContentPage />} />
              <Route path="/project/details/:cardId" element={<PortfolioDetailsPage />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
