import { useState } from 'react'
import './App.css'
import Avatar from './components/avatar'
import Bud from './assets/bud.png'


function App() {
  const [showMenu, setShowMenu] = useState(false)

  const handleStart = () => {
    setShowMenu(true)
  }

  return (
    <div className="">
      {!showMenu ? (
        
          <section class="">
   <div className="flex justify-center items-center h-screen">
  <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-6">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-dark">Financial education
for every Mauritian</h1>
      <p className="max-w-2xl mb-6 font-light text-grey-900 lg:mb-8 md:text-lg lg:text-xl">Becoming financial literate has never been easier.</p>
      <button
        onClick={handleStart}
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-10 rounded-xl focus:outline-none focus:shadow-outline shadow-lg"
      >
        TRY IT NOW
      </button>
     

    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={Bud} alt="test"/>
    </div>
  </div>
</div>

</section>
          
       
        
      ) : (
        <div className="text-center">
          {<Avatar />}
          
          {/* <button
            onClick={() => setShowMenu(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mb-10"
          >
            Back
          </button> */}
        </div>
      )}
    </div>
  )
}

export default App
