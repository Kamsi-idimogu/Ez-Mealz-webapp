import React, { useState } from "react";
import Axios from 'axios';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone,HiOutlineExternalLink } from 'react-icons/hi';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

const Restaurant = () => {
  const GEOAPI_KEY = '138121f2b688405ebe2aec6e64d47bc1';
  const RAPIDAPI_KEY = '0d337f583bmsh999b4c1904c11ffp10afadjsnc5641f48ece2';
  const RAPIDAPI_HOST = 'travel-advisor.p.rapidapi.com';

  // const center = {lat: 43.7543,lng:-79.4491};
  const center = {lat: 12.91285,lng: 100.87808};

  const [restaurants,UpdateRestaurants] = useState([]);


  async function onPlaceSelect(value) {
    const coordinates = value.geometry.coordinates;
    // const coordinates = [center.lng,center.lat];

    // UpdateCoordinates(value.geometry.coordinates); // [lon,lat]

    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
      params: {
          latitude: coordinates[1], //better to make it 5 decimal places (could be more or less)
          longitude: coordinates[0], //better to make it 5 decimal places (could be more or less)
          limit: '15',
          currency: 'USD',
          distance: '2',
          open_now: 'false',
          lunit: 'km',
          lang: 'en_US'
      },
      headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST
      }
    };
      /* RADPIDAPI AXIOS*/
    await Axios.request(options).then(function (response) {
        console.log(response.data.data);
        if(response.data){
          UpdateRestaurants(response.data.data)
        }else{
          UpdateRestaurants([])
        }
    }).catch(function (error) {
        console.error(error);
    });
  }

  function onSuggectionChange(value) {
    // console.log(value);
  }




  return (
    <section className="restaurant-section">
      <h1 id='eat_out'>Discover great restaurants in their area</h1>
      <div className="container"></div>

      <GeoapifyContext apiKey={GEOAPI_KEY} >
        <GeoapifyGeocoderAutocomplete
          placeholder="Enter address here"
          placeSelect={onPlaceSelect}
          suggestionsChange={onSuggectionChange}
        />
      </GeoapifyContext>

      <section className="rest-container">
        {restaurants.map((item) => {
          if(item.name)
          return(
            <div className="restaurant-card">
              <img src={item.photo ? item.photo.images.large.url : "https://media-cdn.tripadvisor.com/media/photo-w/0e/65/c0/cf/ma-der-la-by-phuthai.jpg"} alt="Restaurant logo"/>
              <div>
                <h4>{item.name}</h4>
                <div className="restaurant-item">
                  <HiOutlineLocationMarker className='restaurant-icon'/>
                  <p>{item.address}</p>
                </div>

                <div className="restaurant-item">
                  {item.phone ? <HiOutlinePhone className='restaurant-icon'/> : <></>}
                  <p>{item.phone}</p>
                </div>

                <div className="restaurant-item">
                  {item.email ? <HiOutlineMail className='restaurant-icon'/> : <></>}
                  <p>{item.email}</p>
                </div>

                <div className="restaurant-item">
                  <HiOutlineExternalLink className='restaurant-icon'/>
                  <a href={item.website ? item.website : item.web_url} target='_blank' rel='noopener noreferrer'>website</a>
                </div>
              </div>
            </div> 
          )
        })}
      </section>
    </section>
  );
};

export default Restaurant;