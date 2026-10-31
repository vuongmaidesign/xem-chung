import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Tắt StrictMode để ngăn chặn YouTube IFrame API bị khởi tạo 2 lần sinh ra player ngầm gây chồng tiếng
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
