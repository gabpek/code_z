import Slider from "@/components/Slider"
import Image from "next/image"

export default function Page() {
  return (
    <div className="container">
      <div className='container mx-auto'>
        <img className='mx-auto bg-auto min-h-[500px] object-cover' src="assets/images/bg.png" alt="" />
      </div>
      <div className="container mx-auto px-2">
        <h1 className="mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white text-center">Az álmai nyaralása a paradicsomban!</h1>
      </div>
      <div className="container">
        <Slider />
      </div>
    </div>
  )
}