import React, { useRef, useState } from "react";
import Axios from 'axios';
import {useJsApiLoader, GoogleMap, Marker, Autocomplete} from '@react-google-maps/api';
// import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const center = {lat: 43.7543,lng:-79.4491};

const Restaurant = () => {
    const GOOGLE_MAPS_API_KEY = 'AIzaSyA7usZ_8wd5ig56VxdgcxkBXbtqWvJrtT8';

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const [map, setMap] = useState(/** @type google.maos.Map */ (null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const originRef = useRef()

    const destinationRef = useRef()

    if(!isLoaded){
        return <h1>Loading...</h1>
    }

    // function calculateRoute(){
    //     if(originRef.current.value === '' || destinationRef.current.value === '')
    //         return
    //     const directionsService = new google.maps.DirectionsService()
    // }

    const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
        latitude: '43.7543', //better to make it 5 decimal places (could be more or less)
        longitude: '-79.4491', //better to make it 5 decimal places (could be more or less)
        limit: '30',
        currency: 'USD',
        distance: '2',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
    },
    headers: {
        'X-RapidAPI-Key': '0d337f583bmsh999b4c1904c11ffp10afadjsnc5641f48ece2',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
    };
    /* RADPIDAPI AXIOS*/
    // Axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    /* GEOAPIFY AXIOS*/
    // const config = {
    //     method: 'GET',
    //     url: 'https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=138121f2b688405ebe2aec6e64d47bc1',
    //     headers: { }
    // };

    // Axios.request(config).then(function (response) {
    //     console.log(response.data)
    // }).catch(function (error){
    //     console.log(error)
    // });

    /*
    Need to wrap autocomplete component around input component
    <Autocomplete>
        <Input type='text' placeholder='Your Address' ref={originRef}/>
    </Autocomplete>
    */

    // function onPlaceSelect(value) {
    //     console.log(value);
    //   }
     
    //   function onSuggectionChange(value) {
    //     console.log(value);
    //   }

    // return <GeoapifyContext apiKey="138121f2b688405ebe2aec6e64d47bc1">
    //   <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
    //     // type='street'
    //     // lang='en'
    //     // position={position}
    //     // countryCodes='auto'
    //     // limit='5'
    //     // value='Canada'
    //     placeSelect={onPlaceSelect}
    //     suggestionsChange={onSuggectionChange}
    //     />
    // </GeoapifyContext>
    return (
        <div>
            <p>restaurants</p>
            <Autocomplete>
            <input placeholder='Your Address' type='text'></input>
            </Autocomplete>

            {/* <GoogleMap 
                center={center} 
                zoom={15} 
                mapContainerStyle={{width : '900px', height:'900px'}}
                options={{
                    zoomControl: false,

                }}
                >

            </GoogleMap> */}
        </div>
    );
};

export default Restaurant;