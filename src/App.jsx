import React from 'react'
import Header from './components/Header'
import Hero from "./components/Hero";
import Cources from './components/Cources';
import Poster from './components/Poster';
import MustExplore from './components/MustExplore';
import Explore from './components/Explore';
import Others from './components/Others';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cources/>
      <Poster/>
      <MustExplore/>
      <Explore/>
      <Others/>
      <Footer/>
    </div>
  )
}

export default App