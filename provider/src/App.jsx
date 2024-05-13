import { ListingContainer } from './components/listing-container';
import { ProductCard } from './components/product-card';
import { useListing } from './hooks/use-listing'
import './App.css'

function App() {
  const { products } = useListing();

  return (
    <ListingContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListingContainer>
  )
}

export default App
