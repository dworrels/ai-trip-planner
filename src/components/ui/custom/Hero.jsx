import { Link } from "react-router-dom"
import { Button } from "../ui/button"

function Hero() {
  return (
    <div className='flex flex-col items-center mx-4 md:mx-16 lg:mx-56 gap-9'>
      <h1
      className='font-extrabold text-[32px] md:text-[50px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> Personalized itineraries at Your Fingertips</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget</p>

    <Link to={'/create-trip'}>
      <Button> Get Started, It&apos;s Free </Button>
    </Link>

    <img src="/landing.jpg" className="-mt-20" />
    </div>
  )
}

export default Hero
