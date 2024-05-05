import { useRef } from 'react';

import { useWidth } from './hooks/use-width'
import './App.css'


function App() {
  const sectionRef = useRef();

  const { width } = useWidth();

  return (
    <section ref={sectionRef}>
      <h1>Window Width: {width}px</h1>
    </section>
  )
}

export default App
