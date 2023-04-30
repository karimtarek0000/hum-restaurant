import { RestaurantCard } from "@/types";
import Link from "next/link";
import Price from "./Price";
import Stars from "./Stars";

type props = {
  restaurant: RestaurantCard;
};

function Card({ restaurant }: props): JSX.Element {
  const { name, main_image, slug, location, cuisine, price, reviews } =
    restaurant;

  return (
    <Link
      href={`/dashboard/restaurant/${slug}`}
      className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
    >
      <img src={main_image} alt={name} className="w-full h-36" />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">{name}</h3>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={reviews} />
          </div>
          <p className="ml-2">
            {reviews.length} review{reviews.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3">{cuisine.name}</p>
          <Price price={price} />
          <p>{location.name}</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
      </div>
    </Link>
  );
}

export default Card;
