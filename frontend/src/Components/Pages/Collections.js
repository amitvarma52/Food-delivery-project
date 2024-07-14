import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import "../CSS/Collections.css"

const Collections = () => {
  return (
    <>
      <div className="collection">
        <div className="headline-section">
          <h1>Collections</h1>
        </div>
        <div className="subHeadline-section">
          <h3>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </h3>
          <div className="rightsubHeadline-section">
            <h3 style={{ color: "rgb(224, 53, 70)" }}>
              All collections in Mumbai
            </h3>
            <MdOutlineArrowRight
              style={{
                fontSize: "30px",
                color: "rgb(224, 53, 70)",
              }}
            />
          </div>
        </div>
        <div className="cards-section">
        <div className="collectioncard">
        <div className="collectioncard-info">
              <span>Newsly open places</span>
              <span>
                24 Places
                <MdOutlineArrowRight
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="collectioncard">
            <div className="collectioncard-info">
              <span>Top Trending Spots</span>
              <span>
                36 Places
                <MdOutlineArrowRight
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="collectioncard">
          <div className="collectioncard-info">
             <span> Best Of Jio World Drive</span>
              <span>
                19 Places
                <MdOutlineArrowRight
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="collectioncard">
          <div className="collectioncard-info">
              <span>Monsoon food Festival</span>
              <span>
                13 Places
                <MdOutlineArrowRight
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
