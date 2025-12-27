import { useState } from 'react'
import Hero from './components/homepage/Hero'
import GradeLevel from './components/homepage/GradeLevel'
import Carousel from './components/homepage/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Hero />
<GradeLevel />
<Carousel />

</div>
  )
}

export default App
