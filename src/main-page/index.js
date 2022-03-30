import './main-page.css';
import Header from './header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/houseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HouseContext from '../context/houseContext';

function App() {
  // importing custom hook
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);


  return (
    <Router>
      <HouseContext.Provider value={allHouses}>

        <div className='container'>
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter allHouses={allHouses} />
          <Routes>
            <Route path="/searchResults/:country" element={<SearchResults  />} />
            <Route path="/house/:id" element={<HouseFromQuery />} />
            <Route path="/" element = {<FeaturedHouse house={featuredHouse} />} />
          </Routes>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
