import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Fruits from "./components/Fruits";
import Tasty from "./components/Tasty";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Fruits></Fruits>
      <Tasty></Tasty>
    </div>
  );
}

export default App;
