import { useEffect, useState } from 'react'

import { ProductsContainer } from './components/products-container';
import { Product } from './components/products';
import './App.css'


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Side effect for fetching the data from API endpoint
  useEffect(() => {
    setLoading(true);

    fetch('https://fakestoreapi.com/products', {
      cache: "force-cache",
    })
      .then(response => response.json())
      .then(data => setProducts(data))

    setLoading(false);
  }, []);

  console.log(products);

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <ProductsContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  )
}

export default App
