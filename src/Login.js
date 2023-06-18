import './App.css';
import { Link } from 'react-router-dom';

function App() {

 

  return (
    <div className="App">
     
      <section class="form " id="form">
    <h1 class="text-center">Login</h1>
    <div class="form">
 <form>
    <input type="text" placeholder="Enter Your Name"required/> <br/>
    <input type="email" placeholder="Enter Your E-mail" required/> <br/>
    <input type="tel" placeholder="Enter Your MobileNumber" required/> <br/>
   <textarea class="p" name="textarea"placeholder="IF you have any problems type here" required></textarea><br/>
   <button type="submit">submit</button> <br/>
</form>
</div>   
</section>
      
<nav>
      <Link to="/Login">  </Link>
     </nav>
      
    </div>
     
    
  );


}

export default App;