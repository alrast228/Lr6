import React from 'react';

function Warning({ isWarning }) {
  return (
    <div>
      {isWarning && <p style={{ color: 'red' }}>Это уведомление о предупреждении!</p>}
    </div>
  );
}

export default Warning;
