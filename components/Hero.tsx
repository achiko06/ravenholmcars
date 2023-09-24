"use client";
import Image from "next/image"
import { Button } from "@/components";


const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover")

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Welcome to RavenHolmCars rental services
        </h1>

        <p className="hero__subtitle">
          Choose from over 1000 vehicles
        </p>

        <Button
          title="Explore Cars"
          containerStyles="bg-primary text-gray-700 font-bold rounded-full mt-10 hover:bg-primary-100 duration-700"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero