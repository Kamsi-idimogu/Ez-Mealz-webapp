import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const ReviewStars = ({rating}) => {
    return (
        <div className='review-stars'>
            { rating === 0.5 ?
                <BsStarHalf className='star'/>
                :
                rating >= 1.0 ?
                <BsStarFill className='star'/>
                :
                <BsStar className='star'/>   
            }
            { rating === 1.5 ?
                <BsStarHalf className='star'/>
                :
                rating >= 2.0 ?
                <BsStarFill className='star'/>
                :
                <BsStar className='star'/>   
            }
            { rating === 2.5 ?
                <BsStarHalf className='star'/>
                :
                rating >= 3.0 ?
                <BsStarFill className='star'/>
                :
                <BsStar className='star'/>   
            }
            { rating === 3.5 ?
                <BsStarHalf className='star'/>
                :
                rating >= 4.0 ?
                <BsStarFill className='star'/>
                :
                <BsStar className='star'/>   
            }
            {
            rating === 4.5 ?
                <BsStarHalf className='star'/>
                : 
                rating >= 5.0 ?
                <BsStarFill className='star'/>
                :
                <BsStar className='star'/>   
            }
        </div>
    )

};

export default ReviewStars;