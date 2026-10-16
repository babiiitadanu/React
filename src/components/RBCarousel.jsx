import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import city from "../assets/beautiful-city.jpg";
import discover from "../assets/discover.jpg";
import nature from "../assets/nature.jpg";

function RBCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: city,
      title: "First Slide",
      description: "This is the first slide.",
    },
    {
      image: discover,
      title: "Second Slide",
      description: "This is the second slide.",
    },
    {
      image: nature,
      title: "Third Slide",
      description: "This is the third slide.",
    },
  ];

  const prevSlide = () => {
    setIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="container-fluid p-4">
     <h1 className="fw-bold mb-4">
        React Bootstrap{" "}
        <span className="text-primary fw-normal">
          Carousel
        </span>
      </h1>


      {/* Main Carousel */}
      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        interval={null}
        indicators={false}
        controls={true}
        className="mb-3"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <div className="ratio ratio-21x9 overflow-hidden rounded-5">
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-100 h-100 object-fit-cover"
                fluid
              />
            </div>

            {/* Text inside image at bottom */}
            <Carousel.Caption className="bottom-0">
              <h3 className="">{slide.title}</h3>
              <p className="mb-0">{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Three dots */}
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        {slides.map((slide, i) => (
          <Button
            key={slide.title}
            variant={index === i ? "primary" : "secondary"}
            className="rounded-circle p-0"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className="d-block p-1" />
          </Button>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <div className="d-flex justify-content-center gap-2">
        <Button variant="primary" onClick={prevSlide}>
          ← Prev
        </Button>

        <Button variant="primary" onClick={nextSlide}>
          Next →
        </Button>
      </div>
    </div>
  );
}

export default RBCarousel;
