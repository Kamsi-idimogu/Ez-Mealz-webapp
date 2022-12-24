import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const ReviewStars = ({rating}) => {
    return (
        <div className='review-stars'>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            { rating === 4.5 ?
                <BsStarHalf className='star'/>
                : 
                rating === 5.0 ?
                <BsStarFill className='star'/>
                :
                <BsStar className='star'/>   
            }
        </div>
    )

};

export default ReviewStars;