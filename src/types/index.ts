import { Cuisine, Location, PRICE, Review } from "@prisma/client";

export type RestaurantCard = {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  reviews: Review[];
};

export type RestaurantSlug = {
  id: number;
  name: string;
  images: Array<string>;
  description: string;
  slug: string;
  reviews: Review[];
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
