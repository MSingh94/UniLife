import React from 'react'
import './CityCard.css'

function CityCard({city}) {

    const cardStyle = {
        backgroundImage: `url(${city.image_url})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        opacity: '0.8', 
      };


  return (
    <div className='city-card' style={cardStyle}>
        <h4>{city.name}</h4>
        <p className='prop-count'>{city.property_count} properties</p>
    </div>
  )
}

export default CityCard
