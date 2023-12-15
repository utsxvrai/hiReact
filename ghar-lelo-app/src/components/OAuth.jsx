import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick(){
    try{
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      toast.success('Signed in successfully!!');
      navigate('/');
    }
    catch(error){
      toast.error("Could not sign in with Google");
    }
  }
  return (
    <button  type="button" onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'>
     <FcGoogle className='text-2xl bg-white rounded-full mr-2' /> Continue with Google
    </button>
  )
}
