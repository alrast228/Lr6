import React from 'react';

function AdminPanel({ isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Управление</button>}
    </div>
  );
}

export default AdminPanel;
