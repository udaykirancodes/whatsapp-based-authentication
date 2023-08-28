'use client'
import React from 'react';
// import { DollarSign, Moon, Star, X, Zap } from 'lucide-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function Landing({ link }) {

    return (
        <div style={{ width: '100vw' }} className="bg-[#050816] text-white">

            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full bg-[#050816]">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-6 lg:px-6">
                        <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border-[2px] border-blue-900 p-2">
                            <p className="text-xs font-medium md:text-sm">
                                Lorem ipsum dolor sit amet consectetur.
                                <span className="ml-2 cursor-pointer font-bold">Read More &rarr;</span>
                            </p>
                        </div>
                        <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl leading-10 text-center m-auto  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                            WhatsApp Integration for Secured and User Friendly Authentication
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg text-[#839192] text-center m-auto">
                            Effortlessly integrate secure and user-friendly authentication using WhatsApp, ensuring a streamlined experience while enhancing account protection and eliminating the need for multiple passwords.
                        </p>
                        <div className="mt-14 flex items-center justify-center ">
                            <a target="_blank" href="https://wa.me/917670938535/?text=Hello">
                                <button type="button" class="box-shadow shadow-gray-900 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 font-medium rounded-lg border-none text-xl px-8 py-3 text-center mr-2 mb-2 outline-none focus:border-none focus:outline-none hover:scale-105  transition delay-10">Continue With WhatsApp</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center p-8 justify-center">
                <hr className='w-[1080px] opacity-30' />
            </div>
            {/* Features Section */}
            <div className="mx-auto mt-10 my-12 max-w-5xl px-4 sm:px-6 md:my-2 lg:my-10 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mt-8 mb-4  text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                        Seamlessly secure and user-friendly authentication integration.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                    <div className='w-30 border-[1px] border-blue-900  p-5 rounded-xl'>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            {/* <DollarSign className="h-9 w-9 text-gray-700" /> */}
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-white " >User Account Authentication</h3>
                        <p className="mt-4 text-sm text-[#AAB7B8]">
                            The project can be used to authenticate user accounts for various applications and services, providing a secure and convenient login experience through WhatsApp
                        </p>
                    </div>
                    <div className='w-30 border-[1px] border-blue-900  p-5 rounded-xl'>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            {/* <Zap className="h-9 w-9 text-gray-700" /> */}
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-white">Two-Factor Authentication (2FA)</h3>
                        <p className="mt-4 text-sm text-[#AAB7B8]">
                            It can serve as an additional layer of security by implementing 2FA using WhatsApp, where users receive verification codes or login prompts via the messaging platform.
                        </p>
                    </div>
                    <div className='w-30 border-[1px] border-blue-900  p-5 rounded-xl'>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            {/* <Moon className="h-9 w-9 text-gray-700" /> */}
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-white">Passwordless Authentication</h3>
                        <p className="mt-4 text-sm text-[#AAB7B8]">
                            The integration allows for passwordless authentication, reducing reliance on traditional passwords and enabling users to access their accounts through WhatsApp-based verification.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center p-8 justify-center">
                <hr className='w-[1080px] opacity-30' />
            </div>
            <div className="mx-auto my-2 max-w-7xl px-2 py-2 lg:px-0">
                <div className="mx-auto my-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                        WhatsApp Bot Integrated for Password Less Authentications
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit.
                    </p>
                </div>
                <div className="flex px-16 flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <h2 className="text-xl font-bold text-white mb-8">Control The <span className="text-[red] tracking-wide">BOT</span> Here </h2>
                        <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span className="text-green-700 tracking-wide">Password</span></label>
                        <div class="relative mb-6">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg> */}
                            </div>
                            <input type="password" id="input-group-1" class="text-green-700 hover:text-white border border-green-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 pl-5 mr-2 mb-2 text-left" placeholder="********" />
                        </div>
                        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Initialize</button>
                        <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Restart</button>
                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Stop</button>
                    </div>
                    <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
                        <img
                            className="h-full p-20 w-full rounded-md object-cover"
                            src={link}
                            alt="Newsletter"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

