import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Fruits from "./components/Fruits";
import Tasty from "./components/Tasty";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Fruits></Fruits>
      <Tasty></Tasty>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;
