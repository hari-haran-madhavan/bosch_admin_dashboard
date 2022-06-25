import './App.css';
import Configuration from './components/configuration/configuration';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeroCarousel from './components/heroCarousel/heroCarousel';
import Instances from './components/instances/instances';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroCarousel />
      <Instances />
      <Configuration />
      <Footer />
    </div>
  );
}

export default App;
