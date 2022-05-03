import React from 'react';
//import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PiligrimServices from './components/pages/Piligrimservices';
import Management from './components/pages/Management';
import ContactUs from './components/pages/ContactUs';
import Alankaras from './components/pages/Alankaras';
import Home from './components/pages/Home';
//import Footer from './components/footer/Footer';
import History from './components/pages/History';
import Trusts from './components/pages/Trusts';
import Gallery from './components/pages/Gallery';
import Calendar from './components/pages/Calendar';
import Festivals from './components/pages/Festivals/Festivals';
import Magazines from './components/pages/Magazines';
import Donations from './components/pages/Donations';
import FreePrasadam from './components/pages/FreePrasadam';
import Kalaradhana from './components/pages/Kalaradhana';
import Sevas from './components/pages/Sevas';
import Events from './components/pages/Events';
//import Footer from './components/footer/Footer';
import Darshanas from './components/pages/Darshanas';
import AnnaPrasadam from './components/pages/AnnaPrasadam';
import Vidyadanam from './components/vidyadanam/Vidyadanam';
import Kalyanakatta from './components/kalyanakatta/Kalyanakatta';
import AdoptedTemples from './components/pages/AdoptedTemples/AdoptedTemples';
import Topbar from './components/Topbar';

function App() {
  return (
<>
   <Router>
     <Topbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/alankaras" exact component={Alankaras}/>
       <Route path="/contactus" exact component={ContactUs}/>
       <Route path="/management" exact component={Management}/>
       <Route path="/piligrimservices" exact component={PiligrimServices}/>
       <Route path="/history" exact component={History}/>
       <Route path="/trusts" exact component={Trusts}/>
       <Route path="/gallery" exact component={Gallery}/>        
       <Route path="/calendar" exact component={Calendar}/>    
       <Route path="/temples" exact component={AdoptedTemples}/>      
       <Route path="/magazines" exact component={Magazines}/>     
       <Route path="/donations" exact component={Donations}/>      
       <Route path="/festivals" exact component={Festivals}/>        
       <Route path="/kalaradhana" exact component={Kalaradhana}/>      
       <Route path="/freeprasadam" exact component={FreePrasadam}/>  
       <Route path="/sevas" exact component={Sevas}/>      
       <Route path="/darshanas" exact component={Darshanas}/>      
       <Route path="/events" exact component={Events}/>      
       <Route path="/vidyadanam" exact component={Vidyadanam}/>
       <Route path="/kalyanakatta" exact component={Kalyanakatta}/>
       <Route path="/annaprasadam" exact component={AnnaPrasadam}/>
     </Switch>
   </Router> 
  
   </>
  );
}

export default App;
