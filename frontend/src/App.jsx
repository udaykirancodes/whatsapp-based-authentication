import { useEffect, useState } from 'react'
import { Landing } from './pages/Landing'
import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:8080";
const socket = io(ENDPOINT);

import { Route, Routes } from "react-router-dom"
import { Profile } from './pages/Profile';

function App() {
  const defaultLink = "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
  const [link, setLink] = useState(defaultLink);
  useEffect(() => {
    socket.on('qrcode', (url) => {
      console.log(url);
      setLink(url);
    })
    socket.on('connect', () => console.log('Connected to Socket'))
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing link={link} />} />
        <Route path="/profile" element={<Profile link={link} />} />
      </Routes>
    </>
  )
}

export default App
