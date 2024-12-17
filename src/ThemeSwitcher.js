import React from 'react';

function ThemeSwitcher({ isDarkMode }) {
  const themeStyle = {
    backgroundColor: isDarkMode ? "#333" : "#FFF",
    color: isDarkMode ? "#FFF" : "#000",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div style={themeStyle}>
      {isDarkMode ? "Темный режим" : "Светлый режим"}
    </div>
  );
}

export default ThemeSwitcher;
