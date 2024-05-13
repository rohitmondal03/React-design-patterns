import React from 'react'

export function Product({ product }) {
  return (
    <div className='products'>
      <h2>
        {product.title}
      </h2>
      <img
        src={product.image}
        alt={product.title}
      />
      <p>
        {product.description}
      </p>
    </div>
  )
}
