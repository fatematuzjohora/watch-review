import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;