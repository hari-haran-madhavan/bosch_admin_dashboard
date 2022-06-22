import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeroCarousel from './components/heroCarousel/heroCarousel';

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroCarousel />
      <Footer />
    </div>
  );
}

export default App;
