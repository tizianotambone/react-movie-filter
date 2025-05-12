import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListFilm from './components/ListFilm'

function App() {



  return (
    <>
     <div className="container"> 
        <h1>Film List </h1>
        
        <div className="listfilm">
         <ListFilm />
        </div>


     
     </div>
    </>
  )
}

export default App
