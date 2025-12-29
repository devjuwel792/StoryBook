
import Hero from './components/homepage/Hero'
import GradeLevel from './components/homepage/GradeLevel'
import Carousel from './components/homepage/Carousel/Carousel'
import AboutCard from './components/homepage/AboutCard'
import AchivementCard from './components/homepage/AchivementCard'
import { Toaster } from "react-hot-toast";

function App() {


  return (
<div>
       <Toaster position="top-right" /><Hero />

<div className=''
    style={{
        background: 'linear-gradient(180deg, #EBF6FF 0%, #F5FAFF 100%)'

    }}
>
  <GradeLevel />
  <h2 className='text-[30px] px-24 font-semibold'>Populer Stories</h2>
<Carousel />

<div className='flex flex-col items-center justify-center gap-3'>
  <button
  className='py-2 text-white px-7 rounded-3xl'
  style={{
    background: 'linear-gradient(270deg, #98D8C8 -0.1%, #1F3A2B 100.1%)'
  }}
  >
    Start Reading Now!
  </button>
  <p className='text-[#6A7282]'>
    Sign up to unlock all stories
  </p>
</div>
</div>
<AboutCard />
<AchivementCard />
</div>
  )
}

export default App;
