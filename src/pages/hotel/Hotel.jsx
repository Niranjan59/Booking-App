import "./hotel.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252631683.jpg?k=bf467a4724479e2d4b7f07a5d1e81f22232f17a45bb76f36bc5f67d6b31ac457&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252631300.jpg?k=e8bc28226e64456e8daad7fda4573b4cb81f5abefa4f4db02444a7dc6a126976&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376030448.jpg?k=1f347c24c7fb4a3ea15f409de7becb0c42217fc9e5de53e8f64cf834db7772c5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378056857.jpg?k=30ef3c38e2faf2227bc0da0115e7a14d75d2c4d8b96737dea013b30676de2e26&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378056051.jpg?k=cd7480e391a662d12744ac8af1625b3ea4b435284aeaf6b4b1d58f90d0da5a94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378056051.jpg?k=cd7480e391a662d12744ac8af1625b3ea4b435284aeaf6b4b1d58f90d0da5a94&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st new york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs.12000 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Hotel Vaishali is situated in Thamel, a 15-minute drive from
                Tribhuvan International Airport. It features an outdoor pool and
                a fitness centre. Room service is available 24 hours. Free WiFi
                is provided. The Vaishali is only a 5-minute drive from the
                Royal Palace Museum and Durbar Marg. The Patan Durbar Square is
                a 20-minute drive from the hotel. Rooms in Hotel Vaishali are
                air-conditioned and come with flat-screen TV, a minibar and a
                work desk. Each room is equipped with private bathroom
                facilities featuring a bathtub, bathrobes and room slippers.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>Rs.9440</b> (3 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
