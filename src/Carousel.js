import React, { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel(props) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = props.photos[currCardIdx];
  const total = props.photos.length;
  const hideLeftIcon = currCardIdx === 0 ? "hidden" : "";
  const hideRightIcon = currCardIdx === total - 1 ? "hidden" : "";

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }
  console.log(currCardIdx)
  console.log(props)
  return (
    <div className="Carousel">
      <h1>{props.title}TEsting</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${hideLeftIcon}`}
          onClick={goBackward}
          data-testid="left-arrow"
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />

        <i
          className={`bi bi-arrow-right-circle ${hideRightIcon}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

export default Carousel;
