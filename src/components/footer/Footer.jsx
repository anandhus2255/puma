import React from "react";
import './Footer.css'



const Footer = () =>{
    const popularSearches = [
        "Men's Shoes",
        "Running Shoes",
        "Sneakers",
        "Sports Shoes",
        "Football Shoes",
        "Cricket Shoes",
        "Badminton Shoes",
        "Basketball Shoes",
        "Gym Shoes",
        "Walking Shoes",
        "Slip-Ons",
        "Men's Sandals",
        "Women's Sandals",
        "Women's Shoes",
        "Women's Running Shoes",
        "Women's Sneakers",
        "White Shoes",
        "White Sneakers",
        "Black Shoes",
        "Red Shoes",
        "Sports Bra",
        "Men's Shorts",
        "Men's T-shirts",
        "Women's T-shirts",
        "Polo T-shirts",
        "Leggings",
        "Water Bottles",
        "Backpacks",
        "Men's Slides",
        "RCB Jersey 2024",
        "Rainy Shoes for Men",
        "Rainy Sandals for Women",
        "Shoes Sale",
        "Puma Speedcat",
        "Black Friday Sale"
      ];
      const motorsportPopularSearches = [
        "BMW Shoes",
        "Ferrari Shoes",
        "BMW T-shirts",
        "Mercedes Shoes",
        "Motorsport Shoes",
        "Ferrari T-shirts",
        "BMW Jackets",
        "Ferrari Caps",
        "BMW Slides",
        "BMW Flip Flops",
        "AMG Petronas Shoes",
        "BMW Motorsport Jacket",
        "BMW Hoodies"
      ];
      
      const winterWearSearches = [
        "Men's Sweatshirts",
        "Women's Sweatshirts",
        "Sports Jackets",
        "Bos Jackets",
        "Girls Jackets",
        "Tracksuits",
        "Track Pants",
        "Bomber Jackets",
        "Windcheater",
        "Hooded Jackets",
        "Cotton Jackets",
        "Biker Jackets",
        "Fleece Jackets",
        "Padded Jackets",
        "Track Jackets",
        "Zipper Jackets",
        "Snow Jackets",
        "Down Jackets",
        "Lightweight Jackets",
        "Polyester Jackets",
        "One8 Jackets",
        "Sweat Jackets",
        "Sleeveless Jackets",
        "Gym Jackets",
        "Running Jackets",
        "Football Jackets",
        "AC Milan Jackets",
        "Manchester City Jackets",
        "Cap",
        "Beanies",
        "Women's Thermal Wear",
        "Men's Thermal Wear",
        "Hooded Sweatshirts",
        "Jackets Under 3000",
        "Ferrari Jackets",
        "BMW Jackets",
        "Gym Hoodies",
        "Women's Oversized Hoodies",
        "Windbreaker Jackets",
        "Puffer Jackets",
        "Jackets for Women"
      ];
      
    return (
        
        <>
        <div className="FotterLinks">
        <span className="PopularSearchBold">Popular Searches: </span>
        <span className="PupularSearchP">{popularSearches.join(" | ")}</span><br /><br />
        <span className="PopularSearchBold">Motorsport Popular Search: </span>
        <span className="PupularSearchP">{motorsportPopularSearches.join(" | ")}</span><br /><br />
        <span className="PopularSearchBold">Winter Wear Search: </span>
        <span className="PupularSearchP">{winterWearSearches.join(" | ")}</span>
        </div></>
    )
}

export default Footer 