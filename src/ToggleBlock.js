import React, { useState } from 'react';

function ToggleBlock() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Скрыть" : "Показать"}
      </button>
      {isVisible && <div>Это блок, который можно показать или скрыть</div>}
    </div>
  );
}

export default ToggleBlock;
