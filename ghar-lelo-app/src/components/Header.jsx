import React from 'react'
import {useLocation , useNavigate} from 'react-router-dom'


export default function Header() {
  const location = useLocation()
  console.log(location.pathname)
  function pathMathRoute(path) {
    if(location.pathname === path) {
      return true
    }
  }

  const navigate = useNavigate()
  function navigateToSignIn() {
    navigate('/sign-in')
  }
  function navigateToHome() {
    navigate('/')
  }
  function navigateToOffers() {
    navigate('/offers')
  }


  return (
    <div className='bg-gray-100 border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3  max-w-6xl mx-auto '>
            <div>
                <img src="/logo192.png" alt="logo" className="h-10 cursor-pointer" onClick={()=>navigateToHome()} />
            </div>
            <div>
              <ul className='flex space-x-10'>
                <li className={`text-l cursor-pointer py-4 font-semibold text-green-800 border-b-[3px] border-b-transparent ${pathMathRoute('/') && "text-black border-b-green-700"}`} onClick={()=>navigateToHome()}>Home</li>
                <li className={`text-l cursor-pointer py-4 font-semibold text-green-800 border-b-[3px] border-b-transparent ${pathMathRoute('/offers') && "text-black border-b-green-700"}`} onClick={()=> navigateToOffers()}>Offers</li>
                <li className={`text-l cursor-pointer py-4 font-semibold text-green-800 border-b-[3px] border-b-transparent ${pathMathRoute('/sign-in') && "text-black border-b-green-700"}`} onClick={()=> navigateToSignIn()}>Sign In</li>
              </ul>
            </div>
        </header>
    </div>
  )
}