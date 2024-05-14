import Box from './components/box'
import './App.css'

function App() {

  return (
    <section>
      <Box
        renderConcatenation={value => <p>Concatenation: {value + value}</p>}
        renderValue={value => <p>Value: {value}</p>}
      />
    </section>
  )
}

export default App
