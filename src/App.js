import './App.css';
import Navbar from './NavBar/Navbar';
import LandingPage from './LandingPage/Landing';
import Videos from './Videos/Videos';
import Blog from './Blog/Blog';
import Podcast from './Podcast/Podcast';
import ResumePortfolios from './Resume/ResumePortfolios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Videos />
      <Blog />
      <Podcast />
      <ResumePortfolios />
    </div>
  );
}

export default App;
