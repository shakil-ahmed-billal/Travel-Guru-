import React, { useState } from "react";
import Sajek from "../assets/Sajek.png";
import Sreemongol from "../assets/Sreemongol.png";
import Sundorbon from "../assets/sundorbon.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const destinations = [
    {
        id: 1,
        name: "Cox's Bazar",
        image: Sajek, // Path to the image
        description:
            "Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach...",
    },
    {
        id: 2,
        name: "Sreemangal",
        image: Sreemongol, // Path to the image
        description:
            "Sreemangal is known for its tea gardens and lush greenery. It is often referred to as the 'Land of Two Leaves and a Bud'.",
    },
    {
        id: 3,
        name: "Sundarbans",
        image: Sundorbon, // Path to the image
        description:
            "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra, and Meghna rivers. It is home to the Royal Bengal Tiger.",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
    };

    return (
        <div className="relative">
            {/* <Navbar></Navbar> */}
            <div className="  text-white min-h-screen flex items-center justify-center">
            {/* Dynamic Background */}
            <div
                className="absolute inset-0 bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url(${destinations[currentSlide].image})`,

                }}
            ></div>

            {/* Content Overlay */}
            <div className="relative z-10 mx-auto ">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 justify-center ">
                    {/* Text Section */}
                    <div className="flex w-3/6 flex-col justify-center items-center mt-20">
                        <h1 className="text-4xl md:text-8xl font-bold">
                            {destinations[currentSlide].name}
                        </h1>
                        <p className="ml-4 text-gray-300 text-lg">
                            {destinations[currentSlide].description}
                        </p>
                        <div className="mt-20">
                            <Link to={'/booking'} className=" px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600">
                                Booking
                            </Link>
                        </div>
                    </div>

                    {/* Carousel Section */}
                    <div className="flex flex-1 space-x-4 overflow-x-auto scrollbar-hide">
                        {destinations.map((destination, index) => (
                            <div
                                key={destination.id}
                                className={`max-w-[300px] flex-shrink-0 rounded-3xl shadow-md cursor-pointer transform transition-transform ${currentSlide === index
                                    ? "border-4 border-yellow-500"
                                    : "hover:scale-105"
                                    }`}
                                onClick={() => setCurrentSlide(index)} // Change slide on click
                            >
                                <div className="relative">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <div className="font-extrabold absolute bottom-5 text-4xl w-full">
                                        <p className="text-center">{destination.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute inset-x-0 -bottom-20 flex justify-center space-x-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 bg-white hover:bg-gray-700 rounded-full"
                    >
                        <FiChevronLeft className="text-4xl text-black"></FiChevronLeft>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 bg-white hover:bg-gray-700 rounded-full"
                    >
                        <FiChevronRight className="text-4xl text-black"></FiChevronRight>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Slider;
