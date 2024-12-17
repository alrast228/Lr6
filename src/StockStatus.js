import React from 'react';

function StockStatus({ isInStock }) {
  return (
    <div>
      {isInStock ? "На складе" : "Нет в наличии"}
    </div>
  );
}

export default StockStatus;
