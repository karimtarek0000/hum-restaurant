import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews }: { reviews: Review[] }): JSX.Element {
  const renderReviews = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ));

  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {reviews.length} {reviews.length > 1 ? "People" : "Person"} are
        saying
      </h1>
      <div>
        {/* REVIEW CARDS */}
        {renderReviews}
      </div>
    </div>
  );
}

export default Reviews;
