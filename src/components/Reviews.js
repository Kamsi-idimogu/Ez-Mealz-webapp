import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import reviewsData from './data/review-data';
import ReviewStars from './ReviewStars';

const Reviews = () => {
    const [reviews, updateReviews] = useState(reviewsData);
    const [index, setIndex] = useState(0);
  
    function stepForward(){
      const newPosition = (index + 1) % reviews.length;
      setIndex(newPosition)
    }
    function stepBackward(){
      const newPosition = ((reviews.length - 1) + index) % reviews.length
      setIndex(newPosition)
    }

    /*    Auto Slider    */
    useEffect(() => {
        const autoSlide = setInterval(() => {
            stepForward();
        },7000) // runs every 7000ms(7 seconds)
    
        return () => clearInterval(autoSlide) //clean-up function
    
        },[index])//this useEffect will only run when `index` is changed

    return(
        <div className="reviews-container">
        <nav className="reviews">
            <button className="prev" onClick={stepBackward}><FiChevronLeft/></button>
            <div className="review-cards">
                {reviews.map((review,currentIndex) => {
    
                let position = 'nextReview'
                if(currentIndex === index) {
                    position='activeReview'
                }
                if(currentIndex === index - 1 || (index === 0 && currentIndex === review.length-1)){
                    position = 'prevReview'
                }

                return(
                    <div key={review.id} className={`review-card ${position}`}>
                    {/* picture, review title, recipe title, name of person, review rating in stars, review description, maybe date*/}
                    <div className="review-top">
                    <div className="review-profile">
                        <img alt='profile pic' src={review.profile_pic} className='profile-pic'/>
                        <h5>{review.name}</h5>
                    </div>
                    <div className="review-titles">
                        <h4 className="review-title">{review.title}</h4>
                        <h5 className="review-recipe-title"><i>{review.recipe}</i></h5>
                        <ReviewStars rating={review.rating}/>
                    </div>
                    </div>
                    <nav className="review-desc">{review.info}</nav>
                </div>
                )})
                }
                
            </div>
            <button className="next" onClick={stepForward}><FiChevronRight/></button>
        </nav>
        </div>
    );

};

export default Reviews;