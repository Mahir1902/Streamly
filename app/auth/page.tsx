"use client";

import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";


type Props = {};

export default function page({}: Props) {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState('login')

  //We do not want this function to be recreated everytime our page reloads
  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) => currentVarient === 'login' ? 'register' : 'login' )
  }, [])


  const login = useCallback(async () => {

    

    try {

      const result = await signIn('credentials', {
        email,
        password,
        redirect:false,
        callbackUrl:'/'
      })

      if(result?.ok) router.push('/')
      else console.log('Login failed', result?.error);
      
      
    } catch (error) {
      console.log(error);
      
    }

  },[email, password, router])


  //Register fucntion to send data to the register route
  const register = useCallback(async () => {
    try {
      await axios.post('api/auth/register', {
        name,
        email,
        password
      })

      login()
    } catch (error) {
      console.log(error);
      
    }
  }, [email, name, password, login])

  

  return (
    <div className='bg-[url("/images/hero.jpg")] relative h-full w-full bg-no-repeat bg-cover bg-fixed'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <h1 className="text-6xl text-purple-600 font-bold tracking-tighter font-bebas ">
            STREAMLY
          </h1>
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">{varient === 'login' ? 'Sign In' : 'Register' }</h2>
            <div className="flex flex-col gap-4">
              {varient === 'register' && (
              <Input
                lable="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                id="name"
                value={name}
              />)}
              <Input
                lable="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                id="email"
                value={email}
              />
              <Input
                lable="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                id="password"
                value={password}
                type="password"
              />
            </div>
            <button onClick={varient === 'login' ? login : register} className='
              bg-purple-600
              py-3
              rounded-md
              w-full
              text-white
              text-center
              hover:bg-purple-700
              transition
              mt-10
            '>
              {varient === 'login'? 'Login' : 'Register'}
            </button>
            <p className="text-neutral-500 mt-12">{varient === 'login' ? 'First time using Streamly?' : 'Already have an account?'}</p>
            <span onClick={toggleVarient} className="text-white  cursor-pointer">
              {varient === 'login' ? 'Create an account' : 'Login'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
