import './house-module/main-page/main-page.css';
import Header from './house-module/main-page/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchResults from './house-module/search-results';
import HouseFilter from './house-module/main-page/house-filter';
import useHouses from './house-module/hooks/useHouses';
import useFeaturedHouse from './house-module/hooks/useFeaturedHouse';
import React, { Suspense } from 'react';
import HouseContext from './house-module/context/houseContext';
import AppLauncher from './AppLauncher';
// import HouseFromQuery from '../house/houseFromQuery';
const LazyFeaturedHouse = React.lazy(() => import ('./house-module/main-page/featured-house'));

const LazyHouseFromQuery = React.lazy(() => import ('./house-module/house/houseFromQuery'));
const LazySpeakers = React.lazy(() => import ('./speakers-module/speakers'));

function LaunchPage() {
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
            <Route path="/featuredHouse" element =
            {
                <Suspense fallback={<div>Loading Lazy House from Query fallback msg</div>}>
                    <LazyFeaturedHouse house={featuredHouse} />
                </Suspense>
            } />
            <Route path="/speakers" element =
            {
                <Suspense fallback={<div>Loading Lazy House from Query fallback msg</div>}>
                    <LazySpeakers />
                </Suspense>
            }
            // {<FeaturedHouse house={featuredHouse} />} 
            
            />
            <Route path="/" element = {<AppLauncher />} />
          </Routes>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default LaunchPage;
