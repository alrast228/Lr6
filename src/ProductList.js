import React, { useState } from 'react';

function ProductList() {
  const [isPremium, setIsPremium] = useState(false);

  const products = [
    { id: 1, name: "Товар 1", price: 100, premiumPrice: 80 },
    { id: 2, name: "Товар 2", price: 200, premiumPrice: 150 },
    { id: 3, name: "Товар 3", price: 300, premiumPrice: 250 },
  ];

  return (
    <div>
      <button onClick={() => setIsPremium(!isPremium)}>
        {isPremium ? "Обычные цены" : "Премиум цены"}
      </button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}: {isPremium ? product.premiumPrice : product.price}₽
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
