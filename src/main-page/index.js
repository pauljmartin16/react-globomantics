import './main-page.css';
import Header from './header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import React, { Suspense } from 'react';
import HouseContext from '../context/houseContext';
// import HouseFromQuery from '../house/houseFromQuery';
const LazyHouseFromQuery = React.lazy(() => import ('../house/houseFromQuery'));

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
            {/* <Route path="/house/:id" element={<HouseFromQuery />} /> */}
            <Route path="/house/:id" element=
            {
              <Suspense fallback={<div>Loading Lazy House from Query fallback msg</div>}>
                <LazyHouseFromQuery />
              </Suspense>
            } />
            <Route path="/" element = {<FeaturedHouse house={featuredHouse} />} />
          </Routes>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
