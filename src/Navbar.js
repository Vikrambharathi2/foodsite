import './App.css';
import { Link } from 'react-router-dom';
function Navbar() {
  
  return (
    <div className="App">

                                                                            {/* navbar section */}

      <section className="home">
    <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid navbar-dark">
          <a className="navbar-brand " href='#home'>
            <img src="" alt="logo" width="70" height="70" ></img>
          </a>
          <div className="me-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
       
          <div className="collapse  navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/">Home </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Nonveg">Non veg </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Veg">veg </Link>
   
              </li>
             
            
              <li className="nav-item">
                
                <Link className="nav-link" to="/Login">Login </Link>
              </li>
            </ul>
          </div>
    
        </div>
      </nav>
     
        <div id="home" className="row text-center">
          <div className="head">
            <h1>Food's Here</h1>
          </div>
          <p>
            <h3  className="text-white h3p"> Main Motives Of My Restaurent </h3>
             <ul className="text-white">
              <li>Fresh and Organic</li>
              <li>value for money</li>
              <li>Quality and Quantity</li>
             </ul>
          </p>
        
        </div>
        <div className="row  text-center">
          <div className="content mb-5 ">
            <h3>Get Your Favorites Here</h3>
            <button className="btn btn-warning"><a href="#non-veg">Order something</a> </button>
          </div>
        </div>

      </section>


<nav>
      <Link to="/Navbar">  </Link>
     </nav>
    </div>
     
    
  );


}

export default Navbar;