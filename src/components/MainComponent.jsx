// MainComponent.jsx

import React from 'react';
import { useTheme } from './ThemeContext';

function MainComponent() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <h1>My App</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {/* Other components and content */}
    </div>
  );
}

export default MainComponent;
