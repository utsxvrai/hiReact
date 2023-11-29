import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../firebase';

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    Name : '',
    Email: '',
    Password: '',
    // to confirm Pa
  });
    

  const {Name , Email, Password } = formData;

  function onChange(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault()

    try{
      const getAuth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(getAuth, Email, Password)
      const user = userCredentials.user
      console.log(user)

    }
    catch(error){
      console.log('error')
    }
    
  }


  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>SIGN UP</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md-mb-6'>
          <img
            src='https://images.unsplash.com/photo-1629412598702-23a8a9842c8f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='key'
            className='rounded-2xl w-full'
          />
          
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <form onSubmit={onSubmit}>
          <input
              type="text"
              id="Name"
              value={Name}
              onChange={onChange}
              placeholder="Full Name"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="email"
              id="Email"
              value={Email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="Password"
                value={Password}
                onChange={onChange}
                placeholder="Create Password"
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
                  <p className='mb-6 text-sm' > Already have account?
                  <Link to='/sign-in' className='text-red-600 text-sm hover:text-red-700 ml-2 transition duration-200 ease-in-out'>Sign In</Link>
                  </p>
                  
                </div>
                <button className='bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out text-white text-sm font-semibold px-8 py-2 rounded-md w-full shadow-sm hover:shadow-lg uppercase'>sign-up
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
