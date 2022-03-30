import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import House from './';
import HouseContext from '../context/houseContext';
import useHouses from '../hooks/useHouses';


const HouseFromQuery = () => {
    const { id } = useParams();

    // pjm - it's possible Lazy doesnt inherit the data context. Needs further investigation
    // this is a quick hack to load an address for lazy loading
    const allHouses = [{
        "id": id,
        "address": "12 Valley of Kings, Geneva",
        "country": "Switzerland",
        "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
        "price": 900000,
        "photo": "277667"
    }];


    const house = allHouses.find((h) => h.id == parseInt(id));

    if (!house) return <div>House not found.</div>
    return <House house={house}></House>
}

export default HouseFromQuery;