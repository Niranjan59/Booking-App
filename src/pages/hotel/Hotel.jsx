import "./hotel.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/11132496.jpg?k=972307b5c8d7b32eefe673e22914977114f71758a9739bd2a2ae46120aed3147&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
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
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
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
