import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/About"
import Home from "./components/Home"


function App() {

  return (
   <div>
    <Header />
    <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    <Footer />
   </div>
  )
}

export default App
