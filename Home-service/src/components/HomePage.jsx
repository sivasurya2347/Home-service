import Navbar from "./Navbar"
import Cards from "./Cards"
import About_Us from "./About_Us"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="home">
        <div className="home-box1">
              <h1>hello</h1>
        </div>
        <div className="home-box2">
               <h1>hi</h1>
        </div>
      </div>
      <div>
         <Cards/>
      </div>
      <h1>About Us</h1>
      <div id='about-us'>
         <About_Us/>
      </div>
    </div>
  )
}

export default HomePage