import React, { useState } from 'react';

function MoreDetails() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Скрыть" : "Подробнее"}
      </button>
      {showDetails && <p>Это подробный текст с описанием.</p>}
    </div>
  );
}

export default MoreDetails;
