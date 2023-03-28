import React from "react"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact.Jsx"
import Gallery from "./pages/gallery/Gallery"
import Home from "./pages/home/Home"
import NotFound from "./pages/not found/NotFound"
import Plans from "./pages/plans/Plans"
import Trainings from "./pages/trainings/Trainings"


function App() {

  return (
    <div className="App">
       <Home/>
       <About/>
       <Contact/>
       <Plans/>
       <Gallery />
       <Trainings/>
       <NotFound/>

      <p className="read-the-docs">
This page displays clearly     </p>
    </div>
  )
}

export default App
