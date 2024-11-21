// // import React, { useState, useEffect } from 'react';
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import styles from './Hero.module.scss';  // Changed to module.scss

// const Hero = ({ slides }) => {
// 	return (
// 		<div
// 			style={{
// 				width: "1200px",
// 				height: "400px",
// 				border: "2px solid red",
// 				backgroundColor: "blue",
// 				margin: "0 auto",
// 			}}
// 		>
// 			<h1 style={{ color: "white" }}>Hero Test</h1>
// 		</div>
// 	);
// };

// export default Hero;
// -----------------------------------------------//

import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../styles/_hero.scss/';

interface SlideData {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroProps {
  slides: SlideData[];
}

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" role="region" aria-label="Featured content slider">
      <div className="slider" aria-live="polite">
        {slides.map((content, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${content.image})` }}
          >
            <div className="slide-content">
              <h2>{content.title}</h2>
              <p>{content.description}</p>
              <a href={content.ctaLink} className="cta-button">
                {content.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-nav" role="navigation" aria-label="Slider navigation">
        <button
          className="prev"
          aria-label="Previous slide"
          title="View previous slide"
          onClick={prevSlide}
        >
          <span className="sr-only">Previous slide</span>
          <IoIosArrowBack />
        </button>
        <button
          className="next"
          aria-label="Next slide"
          title="View next slide"
          onClick={nextSlide}
        >
          <span className="sr-only">Next slide</span>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Hero;
// ---------------------------------------------- -----------------------------------------------//
// import React, { useState, useEffect, useCallback } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import '../styles/_hero.scss/';

// interface SlideData {
//   image: string;
//   title: string;
//   description: string;
//   ctaText: string;
//   ctaLink: string;
// }

// interface HeroProps {
//   slides: SlideData[];
// }

// const Hero: React.FC<HeroProps> = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

// //   const nextSlide = useCallback(() => {
// //     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
// //   }, [slides.length]);

// //   const prevSlide = useCallback(() => {
// //     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
// //   }, [slides.length]);

// const nextSlide = () => {
//     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//        const timer = setInterval(nextSlide, 5000);
//        return () => clearInterval(timer);
//      }, []);

// //   useEffect(() => {
// //     const timer = setInterval(nextSlide, 5000);
// //     return () => clearInterval(timer);
// //   }, [nextSlide]);

//   return (
//     <div className="hero">
//       {slides.map((content, index) => (
//         <div
//           key={index}
//           className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
//         >
//           <img
//             src={content.image}
//             alt={content.title}
//             className="hero__image"
//           />
//           <div className="hero__content">
//             <h1 className="hero__title">{content.title}</h1>
//             <p className="hero__description">{content.description}</p>
//             <a href={content.ctaLink} className="hero__cta">
//               {content.ctaText}
//             </a>
//           </div>
//         </div>
//       ))}

//       <button
//         onClick={prevSlide}
//         className="hero__arrow hero__arrow--prev"
//         aria-label="Previous slide"
//       >
//         <IoIosArrowBack />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="hero__arrow hero__arrow--next"
//         aria-label="Next slide"
//       >
//         <IoIosArrowForward />
//       </button>

//       <div className="hero__dots">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;
// ---------------------------------------------- -----------------------------------------------//
// // // // import React, { useState, useEffect, useCallback } from 'react';
// // // // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // // // import './Hero.scss';

// // // // interface SlideData {
// // // //   image: string;
// // // //   title: string;
// // // //   description: string;
// // // //   ctaText: string;
// // // //   ctaLink: string;
// // // // }

// // // // interface HeroProps {
// // // //   slides: SlideData[];
// // // // }

// // // // const Hero: React.FC<HeroProps> = ({ slides }) => {
// // // //   const [currentSlide, setCurrentSlide] = useState(0);

// // // //   const nextSlide = useCallback(() => {
// // // //     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
// // // //   }, [slides.length]);

// // // //   const prevSlide = useCallback(() => {
// // // //     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
// // // //   }, [slides.length]);

// // // //   useEffect(() => {
// // // //     const timer = setInterval(nextSlide, 5000);
// // // //     return () => clearInterval(timer);
// // // //   }, [nextSlide]);

// // // //   return (
// // // //     <div className="hero">
// // // //       {slides.map((content, index) => (
// // // //         <div
// // // //           key={index}
// // // //           className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
// // // //         >
// // // //           <img
// // // //             src={content.image}
// // // //             alt={content.title}
// // // //             className="hero__image"
// // // //           />
// // // //           <div className="hero__overlay">
// // // //             <div className="hero__content">
// // // //               <h1 className="hero__title">{content.title}</h1>
// // // //               <p className="hero__description">{content.description}</p>
// // // //               <a href={content.ctaLink} className="hero__cta">
// // // //                 {content.ctaText}
// // // //               </a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ))}

// // // //       <button
// // // //         onClick={prevSlide}
// // // //         className="hero__arrow hero__arrow--prev"
// // // //         aria-label="Previous slide"
// // // //       >
// // // //         <IoIosArrowBack />
// // // //       </button>

// // // //       <button
// // // //         onClick={nextSlide}
// // // //         className="hero__arrow hero__arrow--next"
// // // //         aria-label="Next slide"
// // // //       >
// // // //         <IoIosArrowForward />
// // // //       </button>

// // // //       <div className="hero__dots">
// // // //         {slides.map((_, index) => (
// // // //           <button
// // // //             key={index}
// // // //             onClick={() => setCurrentSlide(index)}
// // // //             className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
// // // //             aria-label={`Go to slide ${index + 1}`}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hero;

// // // import React, { useState, useEffect, useCallback } from 'react';
// // // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // // import './Hero.scss';

// // // interface SlideData {
// // //   image: string;
// // //   title: string;
// // //   description: string;
// // //   ctaText: string;
// // //   ctaLink: string;
// // // }

// // // interface HeroProps {
// // //   slides: SlideData[];
// // // }

// // // const Hero: React.FC<HeroProps> = ({ slides }) => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // // //   const nextSlide = () => {
// // // //     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
// // // //   };

// // // const nextSlide = useCallback(() => {
// // //     setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
// // //   }, [slides.length]);

// // //   const prevSlide = () => {
// // //     setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
// // //   };

// // //   useEffect(() => {
// // //     const timer = setInterval(nextSlide, 5000);
// // //     return () => clearInterval(timer);
// // //   }, [nextSlide]);

// // //   return (
// // //     <div className="hero">
// // //       {slides.map((content, index) => (
// // //         <div
// // //           key={index}
// // //           className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
// // //         >
// // //           <img
// // //             src={content.image}
// // //             alt={content.title}
// // //             className="hero__image"
// // //           />
// // //           <div className="hero__overlay">
// // //             <div className="hero__content">
// // //               <h1 className="hero__title">{content.title}</h1>
// // //               <p className="hero__description">{content.description}</p>
// // //               <a href={content.ctaLink} className="hero__cta">
// // //                 {content.ctaText}
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}

// // //       <button
// // //         onClick={prevSlide}
// // //         className="hero__arrow hero__arrow--prev"
// // //         aria-label="Previous slide"
// // //       >
// // //         <IoIosArrowBack />
// // //       </button>

// // //       <button
// // //         onClick={nextSlide}
// // //         className="hero__arrow hero__arrow--next"
// // //         aria-label="Next slide"
// // //       >
// // //         <IoIosArrowForward />
// // //       </button>

// // //       <div className="hero__dots">
// // //         {slides.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => setCurrentSlide(index)}
// // //             className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
// // //             aria-label={`Go to slide ${index + 1}`}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

// // // // // import React, { useState, useEffect } from 'react';

// // // // // interface SlideData {
// // // // //   image: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   ctaText: string;
// // // // //   ctaLink: string;
// // // // // }

// // // // // interface HeroProps {
// // // // //   slides: SlideData[];
// // // // //   autoAdvanceInterval?: number;
// // // // // }

// // // // // const Hero: React.FC<HeroProps> = ({
// // // // //   slides,
// // // // //   autoAdvanceInterval = 5000
// // // // // }) => {
// // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // //   const [isTransitioning, setIsTransitioning] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       nextSlide();
// // // // //     }, autoAdvanceInterval);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [currentSlide, autoAdvanceInterval]);

// // // // //   const nextSlide = () => {
// // // // //     if (!isTransitioning) {
// // // // //       setIsTransitioning(true);
// // // // //       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// // // // //       setTimeout(() => setIsTransitioning(false), 500);
// // // // //     }
// // // // //   };

// // // // //   const prevSlide = () => {
// // // // //     if (!isTransitioning) {
// // // // //       setIsTransitioning(true);
// // // // //       setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // //       setTimeout(() => setIsTransitioning(false), 500);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative w-full max-w-[1200px] h-[400px] mx-auto overflow-hidden rounded-lg">
// // // // //       {slides.map((slide, index) => (
// // // // //         <div
// // // // //           key={index}
// // // // //           className={`absolute inset-0 transition-opacity duration-500 ${
// // // // //             index === currentSlide ? 'opacity-100' : 'opacity-0'
// // // // //           }`}
// // // // //         >
// // // // //           <div
// // // // //             className="absolute inset-0 bg-cover bg-center"
// // // // //             style={{ backgroundImage: `url(${slide.image})` }}
// // // // //           />
// // // // //           <div className="absolute inset-0 bg-black/40" />

// // // // //           <div className="absolute bottom-16 left-8 max-w-lg text-white p-6">
// // // // //             <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
// // // // //             <p className="text-xl mb-6">{slide.description}</p>
// // // // //             <a
// // // // //               href={slide.ctaLink}
// // // // //               className="inline-block bg-white text-black px-6 py-3 rounded-full
// // // // //                        font-semibold transition-all hover:-translate-y-1
// // // // //                        hover:shadow-lg"
// // // // //             >
// // // // //               {slide.ctaText}
// // // // //             </a>
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}

// // // // //       <button
// // // // //         onClick={prevSlide}
// // // // //         className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10
// // // // //                    rounded-full bg-white/20 text-white flex items-center
// // // // //                    justify-center transition-all hover:bg-white/30"
// // // // //         disabled={isTransitioning}
// // // // //       >
// // // // //         ←
// // // // //       </button>

// // // // //       <button
// // // // //         onClick={nextSlide}
// // // // //         className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10
// // // // //                    rounded-full bg-white/20 text-white flex items-center
// // // // //                    justify-center transition-all hover:bg-white/30"
// // // // //         disabled={isTransitioning}
// // // // //       >
// // // // //         →
// // // // //       </button>

// // // // //       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
// // // // //         {slides.map((_, index) => (
// // // // //           <button
// // // // //             key={index}
// // // // //             className={`w-2 h-2 rounded-full transition-all ${
// // // // //               index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
// // // // //             }`}
// // // // //             onClick={() => setCurrentSlide(index)}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Hero;
