import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import LandingPage from "./LandingPage/LandingPage";
import ReviewsSection from "./ReviewsSection/ReviewsSection";

const Home = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <div className="landing-page">
        <LandingPage></LandingPage>
      </div>
      {/* Reviews Section */}
      <section className="reviews Section">
        <h1 className=" text-center text-4xl font-bold my-5">
          Reviews Section
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
          {reviews.slice(0, 3).map((review) => (
            <ReviewsSection key={review.id} review={review}></ReviewsSection>
          ))}
        </div>
        <div className=" flex justify-center">
          <Link to={"/reviews"}>
            <button className=" bg-teal-300 text-white hover:bg-sky-200 hover:text-yellow-100 text-1xl font-bold rounded my-5 p-4">
              See All Reviews
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;