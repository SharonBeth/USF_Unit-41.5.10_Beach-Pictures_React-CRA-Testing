import React from "react";
import Carousel from "../Carousel";
import TEST_IMAGES from "../_testCommon.js";
import { render, fireEvent } from "@testing-library/react";


// Smoke Test
it('renders without crashing', () => {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing" />)
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);

  // expect the first image to show, but not the second
  expect(queryByAltText("testing image 1")).toBeInTheDocument();
  expect(queryByAltText("testing image 2")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("testing image 1")).not.toBeInTheDocument();
  expect(queryByAltText("testing image 2")).toBeInTheDocument();
});


it("should advance to the next image when you click the left arrow", () => {
  const { getByTestId, queryByAltText } = render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // move forward in the carousel by clicking the right arrow
  fireEvent.click(rightArrow);

  // expect second image to show, but not the first
  expect(queryByAltText("testing image 2")).toBeInTheDocument();
  expect(queryByAltText("testing image 1")).not.toBeInTheDocument();

  // move backward in the carousel by clicking the left arrow
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("testing image 1")).toBeInTheDocument();
  expect(queryByAltText("testing image 2")).not.toBeInTheDocument()
});

it("should correctly show and hide arrows", () => {
  const { getByTestId } = render(<Carousel photos={TEST_IMAGES} title="Sharon'sTest" />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // expect the left arrow to be hidden and the right arrow to show 
  expect(leftArrow).toHaveClass("hidden");
  expect(rightArrow).not.toHaveClass("hidden");

  // advance from the first image to the second image, hence expect both arrows show
  fireEvent.click(rightArrow);
  expect(leftArrow).not.toHaveClass("hidden");
  expect(rightArrow).not.toHaveClass("hidden");

  // advance from the second to the third image, hence the left arow shows and the 
  // right arrow is hidden
  fireEvent.click(rightArrow);
  expect(leftArrow).not.toHaveClass("hidden");
  expect(rightArrow).toHaveClass("hidden");
});