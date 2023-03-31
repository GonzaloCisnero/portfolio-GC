import React from 'react'
import Header from './components/header/index'
import Nav from './components/nav/index'
import About from './components/about/index'
import Diplomas from './components/diplomas/index'
import Experience from './components/experience/index'
import Portfolio from './components/porfolio/index'
import Contact from './components/contact/index'
import Footer from './components/footer/index'

const App = () => {
    return (
        <>
         <Header/>
         <Nav/>
         <About/>
         <Diplomas/>
         <Experience/>
         <Portfolio/>
         <Contact/>
         <Footer/>
        </>
    )
}

export default App