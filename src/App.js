
import Hero from './Containers/Hero';
import NavBar from './Components/NavBar';
import TechStack from './Containers/TechStack';
import Poroject from './Containers/Poroject';
import Footer from './Components/Footer';
import Contact from './Containers/Contact';


function App() {
  return (
    <div className="container lg:px-52">
      <Hero />
      <TechStack />
      <Poroject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
