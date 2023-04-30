import fullStar from "../assets/icons/full-star.png";
import halfStar from "../assets/icons/half-star.png";
import emptyStar from "../assets/icons/empty-star.png";
import Image from "next/image";
import { Review } from "@prisma/client";
import { calcRatingsAverage } from "@/utils/calcRatingsAverage";

type Props = {
  reviews?: Review[];
  rate?: number;
};

function Stars({ reviews, rate }: Props): JSX.Element {
  const renderStars = () => {
    const rating: number = rate || calcRatingsAverage(reviews as []);

    const stars = [];

    for (let i = 0; i < 5; i++) {
      const diff = parseFloat((rating - i).toFixed(1));
      if (diff >= 1) {
        stars.push(fullStar);
      } else if (diff < 1 && diff > 0) {
        if (diff <= 0.2) stars.push(emptyStar);
        if (diff >= 0.2 && diff <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else {
        stars.push(emptyStar);
      }
    }

    return stars.map((star) => (
      <Image key={star.src} src={star} alt="star" className="w-4 h-4" />
    ));
  };

  return <div className=" flex items-center">{renderStars()}</div>;
}

export default Stars;
