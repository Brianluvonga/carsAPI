// import axios from "axios"
import './App.css';
import { useState, useEffect } from 'react';
import CarCard from './component/CarCard'
// import searchIcon from './search.svg';






const App = () => {
  // const [searchCarItem, setSearchCartem] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCar()
  }, []);

  const api_url = 'https://car-data.p.rapidapi.com/cars?rapidapi-key=6ab4230ca5mshf5e1cf085a80c65p14547cjsn1f24a63beb6d';

  const getCar = () => {

    fetch(`${api_url}`).then((response) => response.json()).then((data) => {
      // console.log(json)
      setCars(data)
    })    

  }

  return (
    <div className="App">
      <h2>Car API</h2>

      {/* <div className='search'>
        <input value={searchCarItem} onChange={(e) => setSearchCartem(e.target.value)} placeholder="Search Car" />
        <img src={searchIcon} alt="search" onClick={() => searchCar(searchCarItem)} />

      </div> */}

      {/* {cars?.length > 0 ? (
        <div className="container">
          {cars.map((car) => (
            <CarCard car={car} />
          ))}
        </div>
      )
        : (
          <div className="empty">
            <h2>No cars found</h2>
          </div>
        )
      } */}
      <pre>
        {JSON.stringify(cars, null, 2)}
      </pre>

      


    </div>
  );
}

export default App;




