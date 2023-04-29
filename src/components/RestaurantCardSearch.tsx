import { RestaurantCard } from "@/types";
import Price from "./Price";

type Props = {
  restaurant: RestaurantCard;
};

function RestaurantCardSearch({ restaurant }: Props): JSX.Element {
  const { name, main_image, price, location, cuisine } = restaurant;

  return (
    <div className="border-b flex pb-5">
      <img src={main_image} alt={name} className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4">{cuisine.name}</p>
            <p className="mr-4">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <a href="">View more information</a>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCardSearch;
