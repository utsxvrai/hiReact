import React from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = React.useState({
    Email: '',
  
  });
    

  const { Email} = formData;

  function onChange(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }


  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold uppercase' >Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md-mb-6'>
          <img
            src='https://images.unsplash.com/photo-1629412598702-23a8a9842c8f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='key'
            className='rounded-2xl w-full'
          />
          
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <form>
            <input
              type="email"
              id="Email"
              value={Email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            
              
              
                <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                  <p className='mb-6 text-sm' > Don't have account?
                  <Link to='/sign-up' className='text-red-600 text-sm hover:text-red-700 ml-2 transition duration-200 ease-in-out'>Register</Link>
                  </p>
                  <p className='mb-6 text-sm'>
                    <Link to='/sign-in' className='text-green-600 text-sm hover:text-green-800 transition duration-200 ease-in-out uppercase'>Sign In</Link>
                  </p>
                </div>
                <button className='bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out text-white text-sm font-semibold px-8 py-2 rounded-md w-full shadow-sm hover:shadow-lg'>SEND RESET PASSWORD
            </button>
            <div className=' flex my-4 items-center 
            before:border-t before:flex-1 before:border-green-300 after:border-t after:flex-1 after:border-green-300'>
              <p className='text-center font-semibold mx-4'>
              OR
              </p>
            </div>
            <OAuth />
            </form> 
        </div>  
      </div>
    </section>
  )
}
