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

export type RestaurantSlug = {
  id: number;
  name: string;
  images: Array<string>;
  description: string;
  slug: string;
};
