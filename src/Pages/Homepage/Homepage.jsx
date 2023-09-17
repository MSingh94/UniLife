import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Homepage.css'
import skyline from '/skyline.png'
import CityCard from '../../Components/CityCard/CityCard';

function Homepage() {

  const [selectedCity, setSelectedCity] = useState([])
  const [city, setCity] = useState([])

  useEffect(() => {

  
    axios.get(`https://unilife-server.herokuapp.com/cities`)
    .then(res => {
      console.log(res.data.response)
      setSelectedCity(res.data.response)
      setCity(res.data.response.slice(0,9))
    })
    .catch((err) => console.log(err));
  }, []);
  

  return (
    <div>
      <div className="background-image"></div>
      <div className="top-container">
        <h1>Find student homes <br/>with bills included</h1>
        <p>A simple and faster way to search for student accomodation</p>
        <div className="search-container">
        <select>
        {selectedCity.map((city) => (
          <option key={city._id} value={city.name} placeholder='Search by City'>
            {city.name}
          </option>
        ))}
      </select>
      <button>Find Homes</button>
      </div>
     </div>
     <div className="title">
      <h3>Student accommodations in our top cities</h3>
     </div>
     <div className="city-container">
     {
        city.map(item => <CityCard key={item._id} city={item}/>)
     }
     </div>
     <button className='all-cities'>See All Cities</button>

    </div>
  )
}



export default Homepage
