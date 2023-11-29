import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    Email: '',
    Password: '',
  });
    

  const { Email, Password } = formData;

  function onChange(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }


  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
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
              id="email"
              value={Email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={Password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
    
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  
                />
              )}
                </div>
                <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                  <p className='mb-6' > Don't have account?
                  <Link to='/signup' className='text-red-600 hover:text-red-700 ml-2 transition duration-200 ease-in-out'>Register</Link>
                  </p>
                  <p>
                    <Link to='/forgotpassword' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot Password?</Link>
                  </p>
                </div>
            </form>
            <button className='bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out text-white text-xl font-semibold px-8 py-2 rounded-md w-full shadow-sm hover:shadow-lg'>SIGN IN
            </button>
            <div className=' flex my-4 items-center 
            before:border-t before:flex-1 before:border-green-300 after:border-t after:flex-1 after:border-green-300'>
              <p className='text-center font-bold mx-4'>
              OR
              </p>
            </div>
        </div>  
      </div>
    </section>
  )
}
