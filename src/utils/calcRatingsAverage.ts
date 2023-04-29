import { Review } from "@prisma/client";

export const calcRatingsAverage = (reviews: Review[]): number => {
  return (
    reviews.length &&
    reviews.reduce((sum, rating) => {
      return sum + rating.rating;
    }, 0) / reviews.length
  );
};
