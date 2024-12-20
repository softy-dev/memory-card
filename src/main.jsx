import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import './styles/reset.css';
import GameScreen from './components/GameScreen';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameScreen></GameScreen>
  </StrictMode>
);
