
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import data from './data';
import Card from './components/Card';

function App() {
  const cards = data.map(items =>{
    return (
      <Card 
        img = {items.coverImg}
        rating = {items.stats.rating}
        reviewCount = {items.stats.reviewCount}
        location = {items.location}
        title = {items.title}
        price = {items.price}
        openSpots = {items.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card--list">{cards}</section>
      
    </div>
  );
}

export default App;
