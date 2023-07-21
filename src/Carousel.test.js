import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "./Carousel";
// import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import React from "react";

////************************************************************* */
//Smoke test for Carousel: left it because it was requested inthe homework.
////************************************************************* */
it("Smoke test for Carousel", function () {
  render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
});

////************************************************************* */
//Snapshot Test for Carousel
////************************************************************* */

it('matches snapshot', () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
  expect(asFragment()).toMatchSnapshot();
});


////************************************************************* */
//Click Right Arrow, 
//This was in the starter code for guidance on teh rest of hte code.
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

it("works when you click the left arrow", function () {
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









  ////************************************************************* */
  // move forward in the carousel. & then back to show using the left arrow button
  //
  ////************************************************************* */
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  //

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  ////************************************************************* */
  // expect the second image to show, but not the first
  //I think this was starter test-code.
  ////************************************************************* */
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

////************************************************************* */
//Testing to find actual text in teh User interface instead of just the html in the file code.
////************************************************************* */

// it("confirms that the 'image' text is on the page when rendered", async () => {
  // const { getAllByText } = render(
    // <Carousel
      // photos={TEST_IMAGES}
      // title="images for testing"
// 
    // />
  // )
// 
  // screen.getAllByText('Image', { exact: false }).toBeInTheDocument();
// 
// })
// 