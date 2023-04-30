import fullStar from "../assets/icons/full-star.png";
import halfStar from "../assets/icons/half-star.png";
import emptyStar from "../assets/icons/empty-star.png";
import Image from "next/image";
import { Review } from "@prisma/client";
import { calcRatingsAverage } from "@/utils/calcRatingsAverage";

function Stars({ reviews }: { reviews: Review[] }): JSX.Element {
  const renderStars = () => {
    const rating = calcRatingsAverage(reviews);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));
      // Int
      if (difference >= 1) stars.push(fullStar);
      // Float
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStar);
        else if (difference > 0.2 && difference <= 0.6) stars.push(halfStar);
      } else stars.push(emptyStar);
    }

    return stars.map((star) => (
      <Image src={star} alt="star" className="w-4 h-4" />
    ));
  };

  return <div className=" flex items-center">{renderStars()}</div>;
}

export default Stars;
