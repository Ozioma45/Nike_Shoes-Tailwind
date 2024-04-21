import ReviewCard from "../Component/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What are
        <span className="text-coral-red"> Customer</span> say?
      </h3>
      <p className="info-text m-auto max-w-lg mt-4 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us
      </p>
      <div className="mt-24 flex flex-1 items-center max-lg:flex-col gap-14 justify-evenly">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
