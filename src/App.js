import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navigationbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigationbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
