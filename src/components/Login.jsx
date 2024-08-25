import React, { useState } from 'react';
import { LOGIN_DETAILS } from "../services/login-detail";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userDetails } from '../recoil/atoms';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const setUser = useSetRecoilState(userDetails)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === LOGIN_DETAILS.email && password === LOGIN_DETAILS.password) {
      setError('');
      setUser(LOGIN_DETAILS);
      navigate("/dashboard")
    } else {
      setError('Invalid email or password');
    }
  }


  return (
    <div className='flex-row xl:flex justify-center items-center bg-[#090909eb] gap-7 p-10 rounded-2xl shadow-2xl shadow-black w-2/3 xl:h-2/3 h-auto m-auto border-white border-4'>
      <div className="w-full rounded-lg md:mt-0 md:max-w-lg m-auto">
        <div className="p-6 space-y-2">

          <h1 className="text-3xl font-bold text-center">
            Login to your account
          </h1>

          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className='mb-5'>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-200">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="text-gray-800 hover:text-zinc-200 bg-stone-200 hover:bg-stone-900 border hover:border rounded-lg text-sm px-5 py-1.5 font-semibold text-center my-5">
              Sign in
            </button>
            <p className="text-sm font-light">
              Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
