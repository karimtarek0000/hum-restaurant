import { Cuisine, Location, PRICE } from "@prisma/client";

export type RestaurantCard = {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
};
