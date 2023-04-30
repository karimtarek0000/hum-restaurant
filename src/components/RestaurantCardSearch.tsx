import { RestaurantCard } from "@/types";
import { calcRatingsAverage } from "@/utils/calcRatingsAverage";
import Link from "next/link";
import Price from "./Price";
import Stars from "./Stars";

type Props = {
  restaurant: RestaurantCard;
};

function RestaurantCardSearch({ restaurant }: Props): JSX.Element {
  const { name, slug, main_image, price, location, cuisine, reviews } =
    restaurant;

  const renderRatingTitle = (): string => {
    const rating: number = calcRatingsAverage(reviews);

    if (rating > 4) return "Awesome";
    if (rating <= 4 && rating > 3) return "Good";
    if (rating <= 3 && rating > 0) return "Average";
    return "";
  };

  return (
    <div className="border-b flex pb-5">
      <img src={main_image} alt={name} className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingTitle()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4">{cuisine.name}</p>
            <p className="mr-4">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/dashboard/restaurant/${slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCardSearch;
