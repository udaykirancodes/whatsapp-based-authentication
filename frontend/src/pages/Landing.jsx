'use client'
import React from 'react';
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
                                <button type="button" className="box-shadow shadow-gray-900 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 font-medium rounded-lg border-none text-xl px-8 py-3 text-center mr-2 mb-2 outline-none focus:border-none focus:outline-none hover:scale-105  transition delay-10">Continue With WhatsApp</button>
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
                        Seamlessly secure and user-friendly authentication integration.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                    <div className='w-30 border-[1px] border-blue-900  p-5 rounded-xl'>
                        <div className="mx-auto flex h-20 w-20 p-3 items-center justify-center rounded-full bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 49 49" viewBox="0 0 49 49" id="laptop-security"><path d="M36.4,0.5H12.5c-0.4,8.8-10.1,8-10.1,8c-0.3,28.1,22,40,22,40s22.6-12.6,22-40C46.5,8.5,37.2,9.7,36.4,0.5z M42,21.2c0,1.9-1.5,3.4-3.4,3.4c-0.8,0-1.5-0.3-2.1-0.7c-0.4,0.7-1.1,1.1-1.9,1.1h-0.7v0.1c0,1.6-1.3,2.9-2.9,2.9h0v1.9c0.7,0.6,1.2,1.6,1.2,2.6c0,1.9-1.5,3.4-3.4,3.4c-1.2,0-2.3-0.6-2.9-1.6c-0.4,0.2-0.8,0.2-1.2,0.2c-0.5,0-1.1-0.1-1.5-0.4c-0.6,1-1.7,1.7-3,1.7c-1.9,0-3.4-1.5-3.4-3.4c0-1,0.4-1.9,1.2-2.6V28c-1.5-0.2-2.6-1.4-2.6-2.9v-0.1h-0.8c-0.8,0-1.5-0.4-1.9-1.1c-0.6,0.5-1.3,0.7-2.1,0.7c-1.9,0-3.4-1.5-3.4-3.4c0-1.1,0.5-2.1,1.3-2.7c-0.8-0.6-1.3-1.6-1.3-2.7c0-1.9,1.5-3.4,3.4-3.4c1,0,1.9,0.4,2.6,1.2h0.8c0.7,0,1.4,0.3,1.8,0.9c0.4-0.8,1.2-1.4,2.1-1.6v-1.3c0-3.8,3.1-6.9,6.9-6.9c1.8,0,3.6,0.7,4.9,2c1.3,1.3,2,3,2,4.9v1.3c0.9,0.1,1.7,0.7,2.1,1.5c0.4-0.5,1.1-0.9,1.8-0.9H36c0.6-0.7,1.6-1.2,2.6-1.2c1.9,0,3.4,1.5,3.4,3.4c0,1.1-0.5,2.1-1.3,2.7C41.4,19.1,42,20.1,42,21.2z"></path><path d="M38.6 13.9c-.8 0-1.4.5-1.7 1.2h-1.6c-.3 0-.5.2-.6.4l-.5 1.1h-.5V18h.9c.3 0 .5-.2.6-.4l.5-1.1h1.2c.3.7.9 1.2 1.7 1.2 1 0 1.8-.8 1.8-1.9C40.4 14.8 39.6 13.9 38.6 13.9zM14.3 15.5c-.1-.2-.4-.4-.6-.4h-1.6c-.3-.7-.9-1.2-1.7-1.2-1 0-1.8.8-1.8 1.8 0 1 .8 1.9 1.8 1.9.8 0 1.4-.5 1.7-1.2h1.2l.5 1.1c.1.2.4.4.6.4h1v-1.4h-.5L14.3 15.5zM14.3 20.9c-.1-.2-.4-.4-.6-.4h-1.6c-.3-.7-.9-1.2-1.7-1.2-1 0-1.8.8-1.8 1.8 0 1 .8 1.9 1.8 1.9.8 0 1.4-.5 1.7-1.2h1.2l.5 1.1c.1.2.4.4.6.4h1V22h-.5L14.3 20.9zM20.7 30.7v-2.9h-1.4v2.9c-.7.3-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8 1 0 1.8-.8 1.8-1.8C21.8 31.7 21.4 31 20.7 30.7zM38.6 19.3c-.8 0-1.4.5-1.7 1.2h-1.6c-.3 0-.5.2-.6.4L34.1 22h-.5v1.4h.9c.3 0 .5-.2.6-.4l.5-1.1h1.2c.3.7.9 1.2 1.7 1.2 1 0 1.8-.8 1.8-1.9C40.4 20.2 39.6 19.3 38.6 19.3zM29.3 30.7v-2.9h-1.4v2.9c-.7.3-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8 1 0 1.8-.8 1.8-1.8C30.5 31.7 30 31 29.3 30.7zM25.2 29.3v-1.6h-1.4v1.6c-.7.3-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8 1 0 1.8-.8 1.8-1.8C26.3 30.3 25.8 29.6 25.2 29.3zM24.5 18.8c-.5 0-.9.4-.9.9 0 .5.4.9.9.9.5 0 .9-.4.9-.9C25.3 19.2 25 18.8 24.5 18.8z"></path><path d="M30.9,14.4h-1.1v-2.8c0-1.5-0.6-2.8-1.6-3.8c-1-1-2.3-1.6-3.8-1.6c-2.9,0-5.3,2.4-5.3,5.3v2.8h-1.1c-0.7,0-1.3,0.6-1.3,1.4v9.3c0,0.7,0.6,1.3,1.3,1.3h12.8c0.7,0,1.4-0.6,1.4-1.3v-9.3C32.2,15,31.6,14.4,30.9,14.4z M25.2,21.8v1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-1c-0.9-0.3-1.5-1.1-1.5-2.1c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C26.7,20.6,26.1,21.5,25.2,21.8z M27.3,14.4h-5.6v-2.8c0-1.5,1.3-2.8,2.8-2.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.2,0.8,2V14.4z"></path></svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-white " >User Account Authentication</h3>
                        <p className="mt-4 text-sm text-[#AAB7B8]">
                            The project can be used to authenticate user accounts for various applications and services, providing a secure and convenient login experience through WhatsApp
                        </p>
                    </div>
                    <div className='w-30 border-[1px] border-blue-900  p-5 rounded-xl'>
                        <div className="mx-auto flex p-3 h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 50 50" viewBox="0 0 50 50" id="pattern-lock"><path d="M37.7,1.5H12.3c-1.6,0-2.9,1.3-2.9,2.9v37.8c0,1.6,1.3,2.9,2.9,2.9h8.4V45c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.1-5.5-8.8-5.1-8.3
		h-1.1V9.4h21.3v20.4c1.6,0.4,2.7,1.9,2.7,3.5V42c0,1.1-0.5,2.2-1.3,2.9c-0.1,0.1-0.1,0.2-0.2,0.3h0.9c1.6,0,2.9-1.3,2.9-2.9V4.4
		C40.6,2.8,39.3,1.5,37.7,1.5z"></path><path d="M19.4 17.2c.6 0 1-.4 1-1s-.4-1-1-1h-1.9c-.6 0-1 .4-1 1s.4 1 1 1H19.4zM25.9 17.2c.6 0 1-.4 1-1s-.4-1-1-1h-1.9c-.6 0-1 .4-1 1s.4 1 1 1H25.9zM32.3 15.2h-1.9c-.6 0-1 .4-1 1s.4 1 1 1h1.9c.6 0 1-.4 1-1S32.9 15.2 32.3 15.2zM17.5 25.3h1.9c.6 0 1-.4 1-1s-.4-1-1-1h-1.9c-.6 0-1 .4-1 1S17 25.3 17.5 25.3zM30.5 23.3c-.6 0-1 .4-1 1s.4 1 1 1h1.9c.6 0 1-.4 1-1s-.4-1-1-1H30.5zM34.6 31.7c-.9 0-1.7.8-1.7 1.7v-.3c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v-.3c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v-7.8c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v11.8l-2-3.8c-.6-1-1.8-1.4-2.9-.9-1 .5-1.4 1.9-.9 2.8.1.1 5.6 9 5.3 8.4.3.5.4 1 .4 1.6v1.2c0 1.3 1 2.3 2.3 2.3h7.4c1.3 0 2.3-1 2.3-2.3v-.5c0-.9.4-1.8 1.1-2.3.4-.4.7-.9.7-1.4v-8.6C36.3 32.5 35.6 31.7 34.6 31.7z"></path></svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-white">Two-Factor Authentication (2FA)</h3>
                        <p className="mt-4 text-sm text-[#AAB7B8]">
                            It can serve as an additional layer of security by implementing 2FA using WhatsApp, where users receive verification codes or login prompts via the messaging platform.
                        </p>
                    </div>
                    <div className='w-30 border-[1px] border-blue-900  p-5 rounded-xl'>
                        <div className="mx-auto flex p-3 h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            {/* <Moon className="h-9 w-9 text-gray-700" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" id="password"><path d="M10,2c-3.311,0 -6,2.689 -6,6c0,3.311 2.689,6 6,6c2.219,0 4.157,-1.207 5.195,-3l1.805,0c0.155,0 0.308,-0.035 0.447,-0.105l1.553,-0.778l1.553,0.778c0.139,0.07 0.292,0.105 0.447,0.105l4,0c0.265,0 0.52,-0.105 0.707,-0.293l2,-2c0.391,-0.39 0.391,-1.024 0,-1.414l-2,-2c-0.187,-0.188 -0.442,-0.293 -0.707,-0.293l-9.805,-0c-1.037,-1.793 -2.976,-3 -5.195,-3Zm0,3c1.656,-0 3,1.344 3,3c0,1.656 -1.344,3 -3,3c-1.656,0 -3,-1.344 -3,-3c0,-1.656 1.344,-3 3,-3Zm0,2c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm-4,9c-2.208,0 -4,1.792 -4,4l0,6c0,2.208 1.792,4 4,4l20,0c2.208,0 4,-1.792 4,-4l0,-6c0,-2.208 -1.792,-4 -4,-4l-20,0Zm1,4.586c0.256,-0 0.512,0.098 0.707,0.293l0.707,0.707l0.707,-0.707c0.39,-0.39 1.024,-0.39 1.414,-0c0.39,0.39 0.39,1.024 0,1.414l-0.707,0.707l0.707,0.707c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.707,-0.707l-0.707,0.707c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 -0,-1.414l0.707,-0.707l-0.707,-0.707c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.195,-0.195 0.451,-0.293 0.707,-0.293Zm7.586,-0c0.256,-0 0.512,0.098 0.707,0.293l0.707,0.707l0.707,-0.707c0.39,-0.39 1.024,-0.39 1.414,-0c0.39,0.39 0.39,1.024 0,1.414l-0.707,0.707l0.707,0.707c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.707,-0.707l-0.707,0.707c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 -0,-1.414l0.707,-0.707l-0.707,-0.707c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.195,-0.195 0.451,-0.293 0.707,-0.293Zm7.586,-0c0.256,-0 0.512,0.098 0.707,0.293l0.707,0.707l0.707,-0.707c0.39,-0.39 1.024,-0.39 1.414,-0c0.39,0.39 0.39,1.024 0,1.414l-0.707,0.707l0.707,0.707c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.707,-0.707l-0.707,0.707c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 -0,-1.414l0.707,-0.707l-0.707,-0.707c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.195,-0.195 0.451,-0.293 0.707,-0.293Z"></path></svg>
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
                        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span className="text-green-700 tracking-wide">Password</span></label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            </div>
                            <input type="password" id="input-group-1" className="text-green-700 hover:text-white border border-green-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 pl-5 mr-2 mb-2 text-left" placeholder="********" />
                        </div>
                        <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Initialize</button>
                        <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Restart</button>
                        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Stop</button>
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

