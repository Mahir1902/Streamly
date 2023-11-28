"use client";

import Input from "@/components/Input";
import { use, useCallback, useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState('login')

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) => currentVarient === 'login' ? 'register' : 'login' )
  }, [])

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
                  setUsername(e.target.value)
                }
                id="username"
                value={username}
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
              />
            </div>
            <button className='
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
