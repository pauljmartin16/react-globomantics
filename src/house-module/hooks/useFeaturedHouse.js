import { useMemo } from "react";

const useFeaturedHouse = (allHouses) => {

    // useMemo - triggers only when allHouses has changed, non on each re-render
  const featuredHouse = useMemo(() => {
    if (allHouses.length > 0){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

    return featuredHouse;
}
 
export default useFeaturedHouse;