import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const MovieBannerImage = () => {
  const history = useHistory();
  return (
    <div className='mainWrapper'>
      <Carousel className='Carousel'>
        <Carousel.Item interval={3000} className='CarouselItem'>
          <img
            className='d-block w-100'
            src='https://images.hdqwalls.com/wallpapers/a-quiet-place-part-ii-2020-8k-ab.jpg'
            alt='First slide'
          />
          <Carousel.Caption className='CarouselCaption'>
            <h2>A Quiet Place Part II</h2>
            <button onClick={() => history.push('/calendar')}>
              Book tickets now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src='https://images.hdqwalls.com/wallpapers/cruella-emma-stone-poster-4k-i9.jpg'
            alt='Second slide'
          />
          <Carousel.Caption className='CarouselCaption'>
            <h2>Cruella</h2>
            <button onClick={() => history.push('/calendar')}>
              Book tickets now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src='https://wallpaperaccess.com/full/3745899.jpg'
            alt='Third slide'
          />
          <Carousel.Caption className='CarouselCaption'>
            <h2>Godzilla vs. Kong</h2>
            <button onClick={() => history.push('/calendar')}>
              Book tickets now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MovieBannerImage;
