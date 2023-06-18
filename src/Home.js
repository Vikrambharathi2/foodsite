import './App.css';
import { Link } from 'react-router-dom';
function Home() {
  
  return (
    
    <div className="App">

<div className='home'>


                                                                              {/* ABOUT SECTION */}
 <div id="home" className="row  text-center">
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
        </div>

      <section class="about" id="about">
             
             <div class="row text-center">
               <h1>About Us</h1>
               <div class="content offset-md-2 offset-lg-2 offset-xl-2 col-12 col-md-8 col-lg-8 col-xl-8 mb-5 ">
                <p class="about-para "> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id.  </p>   
               </div>
             </div>
       </section>

<nav>
      <Link to="/">  </Link>
     </nav>
    </div>
     
    
  );


}

export default Home;