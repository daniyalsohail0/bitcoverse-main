import './App.css';
import Header from "./components/header/Header";
//import Slider from './components/slider/Slider';
// import Projects from './components/projects/Projects';
// import ChoseUs from './components/choseUs/ChoseUs';
// import Work from './components/work/Work';
// import How from './components/how/How';
// import Feature from './components/feature/Feature';
// import Token from './components/token/Token';
// import Arts from './components/arts/Arts';
// import Faq from './components/faq/Faq';
import Prices from './components/prices/Prices';
import Footer from './components/footer/Footer';
import Founder from './components/founder/Founder';

function App() {
  return (
    <>
      <div className="hero">
        <Header />
        {/* <Slider /> */}
      </div>
      {/* <How />
      <Projects />
      <ChoseUs />
      <Feature />
      <Work />
      <Token />
       <Arts />
      <Faq /> */}
      <Founder />
      <Prices />
      <Footer />
    </>
  );
}

export default App;
