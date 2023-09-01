'use client'
import React, { useEffect, useState } from 'react';
// import { DollarSign, Moon, Star, X, Zap } from 'lucide-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import image from "./photo.png";
export function Profile({ link }) {

    const [data, setData] = useState({
        name: 'Loading...',
        phone: 'Loading',
        dp: '',
    });
    const [token, setToken] = useState('');

    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search)
    useEffect(() => {
        console.log(params.get('token'))
        setToken(params.get('token'));
        localStorage.setItem('token', token);
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log('fetching data')
        try {
            const url = `http://localhost:8080/check/${params.get('token')}`
            console.log(url);
            const response = await fetch(url, { headers: { 'Access-Control-Allow-Origin': 'http://localhost:5173/' } });
            const data = await response.json();
            console.log(data);
            if (data.status) {
                console.log(data);
                setData(data.data);
            }
            else {
                navigate('/');
            }
        } catch (error) {
            console.log("Error Msg : " + error.message);
        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    const redirect = () => {
        navigate('/');
    }

    return (
        <div style={{ width: '100%' }} className="bg-[#050816] text-white">

            <Navbar />

            {/* Hero Section */}
            <div className="flex items-center justify-center h-[100vh]  ">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>

                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg border p-1" src={data.dp == "" ? image : data.dp} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                        <span className="text-xl text-gray-500 dark:text-gray-200">+{data.phone.substring(0, 2) + " " + data.phone.substring(2, data.phone.length - 5)}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <p onClick={logout} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</p>
                            <p onClick={redirect} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Home</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}

