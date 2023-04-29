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

export type Item = {
  id: number;
  name: string;
  description: string;
  price: string;
  restaurant_id: number;
};

export type Location = {
  id: number;
  name: string;
};

export type Cuisine = {
  id: number;
  name: string;
};
