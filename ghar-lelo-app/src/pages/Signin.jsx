import React from 'react';

export default function SignIn() {
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
          <form >
              <input 
                type='email' 
                id='Email' 
                value={Email} 
                onChange={onChange}  
                className='w-full' />
            </form>
        </div>
      </div>
    </section>
  )
}
