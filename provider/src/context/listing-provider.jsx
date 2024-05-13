import { createContext, useEffect, useState } from "react"


export const ProductContext = createContext();


export default function ListingProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache',
    })
    .then((response) => response.json())
    .then((data) => setProducts(data))
  })

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}
