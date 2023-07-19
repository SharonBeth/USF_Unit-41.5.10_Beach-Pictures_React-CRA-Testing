import { render, fireEvent } from "@testing-library/react";
import Carousel from "../Carousel";
// import Card from "./Card";
import TEST_IMAGES from "../_testCommon.js";
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
  const { asFragment } = render(<Carousel />);
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
it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
    />
  );

  //************************************************************* */
  // expect the second image to show but not the first
  ////************************************************************* */
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  ////************************************************************* */
  // move forward in the carousel.
  ////************************************************************* */
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow)
  ////************************************************************* */
  // expect the first image to show but not the second, but we clicked down.
  ////************************************************************* */
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
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
