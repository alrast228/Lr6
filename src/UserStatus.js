import React from 'react';

function UserStatus({ isOnline }) {
  return (
    <div>
      Статус: {isOnline ? "Онлайн" : "Офлайн"}
    </div>
  );
}

export default UserStatus;
