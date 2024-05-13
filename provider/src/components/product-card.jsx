
export function ProductCard({ product }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
        padding: '10px',
        height: '100%',
      }}
    >
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  )
}
