import React from 'react';

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? "Добро пожаловать" : "Пожалуйста, войдите"}
    </div>
  );
}

export default Greeting;