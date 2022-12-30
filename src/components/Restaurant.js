import React, { useState } from "react";
import Axios from 'axios';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone,HiOutlineExternalLink } from 'react-icons/hi';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import notFoundImg from '../images/not-found.png';

const Restaurant = () => {
  const GEOAPI_KEY = '138121f2b688405ebe2aec6e64d47bc1';
  const RAPIDAPI_KEY = '0d337f583bmsh999b4c1904c11ffp10afadjsnc5641f48ece2';
  const RAPIDAPI_HOST = 'travel-advisor.p.rapidapi.com';

  const [restaurants,UpdateRestaurants] = useState([]);
  const [notFound,setNotFound] = useState(false);


  async function onPlaceSelect(value) {
    if(value === null)
        return;
    
    const axis = value.geometry.coordinates;

    const coordinates = isNaN(axis[0]) ? axis[0][0] : axis

    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
      params: {
          latitude: coordinates[1], //better to make it 5 decimal places (could be more or less)
          longitude: coordinates[0], //better to make it 5 decimal places (could be more or less)
          limit: '16',
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
        if(response.data && response.data.data.length !== 0){
          UpdateRestaurants(response.data.data)
          setNotFound(false)
        }
        else{
          UpdateRestaurants([])
          setNotFound(true)
        }
    }).catch(function (error) {
        console.error(error);
    });
  }

  function onSuggectionChange(value) {
    // console.log(value);
  }

  const closeBtn = document.querySelectorAll('.geoapify-close-button');
  
  if(closeBtn.length !== 0){
    closeBtn.forEach((btn) => {btn.onclick = function() {
      clearRestaurants()
  }})
  }

  function clearRestaurants(){
    UpdateRestaurants([])
    setNotFound(false)
  }

  return (
    <section className="restaurant-section">
      <h1 id='eat_out'>Discover great restaurants in your area</h1>
      <div className='restaurant-header'>
        <iframe className='google-map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80858433802!2d-79.51814052141697!3d43.718403810686645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1655181713058!5m2!1sen!2sus' 
          width='600' 
          style={{border:'0'}} 
          allowFullScreen='' 
          loading='lazy' 
          referrerPolicy='no-referrer-when-downgrade'
        />
        <div className='restaurant-header-text'>
          <p>Our restaurant locator finds establishments around your address and obtains relevant data about the restaurant.</p>
        </div>
      </div>

      <h3 className='search-box-header'>Enter an address in the search box to find nearby restaurants</h3>

      <GeoapifyContext apiKey={GEOAPI_KEY} >
        <GeoapifyGeocoderAutocomplete
          placeholder="Enter address here"
          placeSelect={onPlaceSelect}
          suggestionsChange={onSuggectionChange}
        />
      </GeoapifyContext>

      { notFound ? 
      <div className='not-found-container'>
        <img src={notFoundImg} className='not-found-img' alt='result not found'/>
        <h1 className='not-found-text'>No nearby restaurants found in selected address</h1> 
      </div>
      :
      <section className="rest-container">
        {restaurants.map((item) => {
          if(item.name)
          return(
            <div className="restaurant-card" key={item.location_id}>
              {item.is_closed ? 
                <p style={{color:'red', border: '1px solid red'}} className='restaurant-status'>closed</p> 
                : 
                <p style={{color:'green', border: '1px solid green'}} className='restaurant-status'>open</p>
              }
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
        { restaurants.length ? <button onClick={clearRestaurants} className='clr-btn' >Clear Result</button> : <></> }
      </section>
      }
    </section>
  );
};

export default Restaurant;