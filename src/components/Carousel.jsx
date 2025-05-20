import { useState, useEffect } from 'react';
import hosteldining from '../assets/hosteldining.avif';
import readingroom from '../assets/readingroom.jpg';
import gymroom from '../assets/gymroom.jpg';
import building from '../assets/hostelbuilding.jpeg';

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: building,
      alt: "Modern University Hostel Building",
      caption: "Modern University Hostel Building"
    },
    {
      id: 2,
      src: gymroom,
      alt: "Gym and Fitness Center",
      caption: "Fitness Center for a Healthy Lifestyle"
    },
    {
      id: 3,
      src: hosteldining,
      alt: "Student Dining Hall",
      caption: "Dining Facilities with Healthy Meal Options"
    },
    {
      id: 4,
      src: readingroom,
      alt: "Study Room",
      caption: "Quiet Study Spaces for Academic Excellence"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel images */}
      <div 
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
              <h3 className="text-xl font-bold">{image.caption}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50
        text-white p-2 rounded-full hover:bg-opacity-75 hover:scale-135 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50
        text-white p-2 rounded-full hover:bg-opacity-75 hover:scale-135 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 