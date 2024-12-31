import React, { useEffect, useState } from "react";
import "./Products.css";
import filter from "../../assets/settings-sliders.png";
import sort from "../../assets/arrow-down-sign-to-navigate (1).png";
import shoe1 from "../../assets/1.webp";
import shoe2 from "../../assets/2.jpg";
import shoe3 from "../../assets/3.jpeg";
import shoe4 from "../../assets/4.jpg";
import shoe5 from "../../assets/5.webp";
import shoe6 from "../../assets/6.jpeg";
import shoe7 from "../../assets/7.webp";
import shoe8 from "../../assets/8.webp";
import shoe9 from "../../assets/9.jpg";
import shoe10 from "../../assets/10.jpg";
import shoe11 from "../../assets/11.jpeg";
import shoe12 from "../../assets/12.jpg";
import shoe13 from "../../assets/13.webp";
import shoe14 from "../../assets/14.jpg";
import shoe15 from "../../assets/15.jpg";
import shoe16 from "../../assets/16.webp";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const [sort, setSort] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(sort);
  useEffect(() => {
    setFilteredProducts(ProductCard);
  }, []);

  const handleSort = (filter) => {
    setSort(filter);
    let sortedProducts = [...ProductCard];
    console.log(filter, "hyy");

    if (filter === "lowToHigh") {
      console.log(filter, "byyy");
      sortedProducts.sort((a, b) => Number(a.Price) - Number(b.Price));
    } else if (filter === "highToLow") {
      console.log(filter, "kooii");
      sortedProducts.sort((a, b) => Number(b.Price) - Number(a.Price));
    }

    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    const filtered = ProductCard.filter((product) =>
      product.Model.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const ProductCard = [
    {
      id: 1,
      ShoeImg: shoe1,
      Color: "2 Colors",
      Model: "BMW M Motorsport Caven 2.0 Unisex Sneakers",
      Price: 6999.0,
      Discount: 15,
    },
    {
      id: 2,
      ShoeImg: shoe2,
      Color: "2 Colors",
      Model: "BMW M Motorsport Caven 2.0 Unisex Sneakers",
      Price: 6999.0,
      Discount: 15,
    },
    {
      id: 3,
      ShoeImg: shoe3,
      Color: "2 Colors",
      Model: "BMW M Motorsport Caven 2.0 Unisex Sneakers",
      Price: 6999.0,
      Discount: 15,
    },
    {
      id: 4,
      ShoeImg: shoe4,
      Color: "2 Colors",
      Model: "Darter Pro Fade Unisex Running Shoes",
      Price: 6999.0,
      Discount: 15,
    },
    {
      id: 5,
      ShoeImg: shoe5,
      Color: "2 Colors",
      Model: "Darter Pro Fade Unisex Running Shoes",
      Price: 6999.0,
      Discount: 15,
    },
    {
      id: 6,
      ShoeImg: shoe6,
      Color: "2 Colors",
      Model: "Easy Rider Mix Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 7,
      ShoeImg: shoe7,
      Color: "2 Colors",
      Model: "Easy Rider Mix Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 8,
      ShoeImg: shoe8,
      Color: "2 Colors",
      Model: "Suede Classic Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 9,
      ShoeImg: shoe9,
      Color: "2 Colors",
      Model: "Suede Classic Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 10,
      ShoeImg: shoe10,
      Color: "2 Colors",
      Model: "Suede Classic Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 11,
      ShoeImg: shoe11,
      Color: "2 Colors",
      Model: "SOFTRIDE Frequence Unisex Running Shoes",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 12,
      ShoeImg: shoe12,
      Color: "2 Colors",
      Model: "SOFTRIDE Frequence Unisex Running Shoes",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 13,
      ShoeImg: shoe13,
      Color: "2 Colors",
      Model: "SOFTRIDE Frequence Unisex Running Shoes",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 14,
      ShoeImg: shoe14,
      Color: "2 Colors",
      Model: "SOFTRIDE Frequence Unisex Running Shoes",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 15,
      ShoeImg: shoe15,
      Color: "2 Colors",
      Model: "SPalermo Lth Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
    {
      id: 16,
      ShoeImg: shoe16,
      Color: "2 Colors",
      Model: "SPalermo Lth Unisex Sneakers",
      Price: 7999.0,
      Discount: 15,
    },
  ];

  return (
    <>
      <div className="ProductsImage">
        <div className="ImageBtn">
          <div className="ImageHead">
            <h1>NEW STYLE ON THE BLOCK</h1>
          </div>
          <div className="ImageBtns">
            <Link to="/mens">
              {" "}
              <div className="Btn1">
                <p>SHOP MEN</p>
              </div>
            </Link>
            <div className="Btn1">
              <p>SHOP WOMEN</p>
            </div>
            <div className="Btn1">
              <p>SHOP KIDS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="New">
        <h1>NEW SEASON</h1>
      </div>
      <div className="ProductSortBtn">
        <button className="Filter">
          FILTERS <img src={filter} alt="" />
        </button>
        <input
          className="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="ShoeSearch"
          placeholder="Search"
        />
        <div className="SortDropdown">
          <select
            className="SortOptions"
            onChange={(e) => handleSort(e.target.value)}
            value={sort}
          >
            <option value="" selected disabled>
              SORT BY
            </option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="ProductsCount">
        <h2>20 PRODUCTS</h2>
      </div>
      <div className="Products">
        {filteredProducts &&
          filteredProducts.map((item) => {
            return (
              <div className="Product">
                <img src={item.ShoeImg} alt="" />
                <p className="Grey">{item.Color}</p>
                <p className="Black">{item.Model}</p>
                <span>
                  <p className="Price">{item.Price}</p>
                </span>
                <p className="Red">
                  Extra {item.Discount} off auto applied at checkout
                </p>
              </div>
            );
          })}
      </div>
      <Outlet />
    </>
  );
};

export default Product;
