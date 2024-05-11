import React from 'react'
import'./App.css';
import { Brand, Cta, Navbar } from './components'
import { Header, Features, Footer, Possibility, Bloog, WhatGPT3} from './containers';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Bloog/>
        <Footer/>

    </div>
  )
}

export default App