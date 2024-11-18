import './App.css'
import Title from "./components/Title"
import Masterhead from './components/Masterhead'
import Icongrid from './components/Icongrid'
import Showcase from './components/Showcase'
import Testimonial from './components/Testimonial'
import Action from './components/Action'

function App() {
  
  return (
    <>
      <div className='Main-container'>
        <Title/>
        <Masterhead/>
        <Icongrid/>
        <Showcase/>
        <Testimonial/>
        <Action/>
    
      </div>
    </>
  )
}

export default App
