export function ListingContainer({children}) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        rowGap: '40px',
        columnGap: "20px",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {children}
    </section>
  )
}
