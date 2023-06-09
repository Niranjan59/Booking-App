import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max500/330067719.jpg?k=483c6ee015f2f5915e1cdf9369dee48ea2538c0e5bdc8a20ef79eff3ea4dfa2a&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Sirachuli Hotel</h1>
        <span className="siDistance">50m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed 
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
        <span className="siPrice">Rs.12000</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availability</button>
            
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
