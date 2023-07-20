import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
// import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import React from "react";

////************************************************************* */
//Smoke test for Carousel
////************************************************************* */
it("Smoke test for Carousel", function () {
  render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
});

////************************************************************* */
//Snapshot Test for Carousel
////************************************************************* */

// it("matches to snapshot", function () {
// const { asFragment } = render(<Carousel />)
// expect(asFragment()).toMatchSnapshot();
// });

it('matches snapshot', () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
  expect(asFragment()).toMatchSnapshot();
});


////************************************************************* */
//Click Right Arrow, 
//I htink this one was given as starter test-code.
////************************************************************* */


it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"

    />
  )

  ////************************************************************* */
  // expect the first image to show, but not the second.
  // I think this was starter test-code.
  ////************************************************************* */

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();


  ////************************************************************* */
  // move forward in the carousel.
  //I think this was starter test-code.
  ////************************************************************* */
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  //

  ////************************************************************* */
  // expect the second image to show, but not the first
  //I think this was starter test-code.
  ////************************************************************* */
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


////************************************************************* */
//left arrow:
////************************************************************* */

it("should advance to the next image when you click the left arrow", () => {
  const { getByTestId, queryByAltText } = render(<Carousel setCurrCardIdx="2" />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // move forward in the carousel by clicking the right arrow
  fireEvent.click(rightArrow);

  // expect second image to show, but not the first
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();

  // move backward in the carousel by clicking the left arrow
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument()
});



// it("works when you get the to first picture, and there is no arrow", function () {
// const { container } = render(
// <Carousel
// photos={TEST_IMAGES}
// title="images for testing"
// />
// );
// expect the first image to show, but not the second
// expect(
// container.querySelector('img[alt="testing image 3"]')
// ).toBeInTheDocument();
// expect(
// container.querySelector('img[alt="testing image 2"]')
// ).not.toBeInTheDocument();
// const leftArrow = container.querySelector(".bi-arrow-left-circle");
// fireEvent.click(leftArrow)
// expect the second image to show, but not the first
// expect(
  // container.querySelector('img[alt="testing image 3"]')
// ).not.toBeInTheDocument();
// expect(
  // container.querySelector('img[alt="testing image 2"]')
// ).toBeInTheDocument();
// });
// 
// it("testing to render entire page", () => {
  // render(<Carousel />);
  // screen.debug();
// })
