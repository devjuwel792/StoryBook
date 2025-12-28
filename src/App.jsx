
import Hero from './components/homepage/Hero'
import GradeLevel from './components/homepage/GradeLevel'
import Carousel from './components/homepage/Carousel/Carousel'
import AboutCard from './components/homepage/AboutCard'
import AchivementCard from './components/homepage/AchivementCard'


function App() {


  return (
<div>
<Hero />

<div className='py-8'
    style={{
        background: 'linear-gradient(180deg, #EBF6FF 0%, #F5FAFF 100%)'

    }}
>
  <GradeLevel />
  <h2 className='text-[30px] px-24 py-16 font-semibold'>Populer Stories</h2>
<Carousel />

<div className='flex flex-col gap-3 justify-center items-center'>
  <button
  className='px-7 py-2 text-white rounded-3xl'
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
