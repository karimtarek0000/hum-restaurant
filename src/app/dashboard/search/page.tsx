import RestaurantCardSearch from "@/components/RestaurantCardSearch";
import SearchBar from "@/components/SearchBar";
import { Cuisine, Location, RestaurantCard } from "@/types";
import { PRICE, PrismaClient } from "@prisma/client";
import type { Metadata } from "next";
import Link from "next/link";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Search",
};

type Props = {
  searchParams: { city: string; cuisine?: string; price?: PRICE };
};

const fetchAllRestaurants = async (
  city: string | undefined
): Promise<RestaurantCard[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    slug: true,
    price: true,
    location: true,
    cuisine: true,
  };
  let data = null;
  if (!city) {
    data = prisma.restaurant.findMany({
      select,
    });
  } else {
    data = prisma.restaurant.findMany({
      where: {
        location: {
          name: {
            equals: city,
          },
        },
      },
      select,
    });
  }
  return data;
};

const fetchAllLocations = async (): Promise<Location[]> => {
  const data = await prisma.location.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return data;
};

const fetchAllCuisine = async (): Promise<Cuisine[]> => {
  const data = await prisma.cuisine.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return data;
};

async function Search({ searchParams }: Props) {
  const city = searchParams.city?.toLowerCase();
  const restaurants = await fetchAllRestaurants(city);
  const locations = await fetchAllLocations();
  const cuisines = await fetchAllCuisine();

  const renderRestaurants = restaurants.map((restaurant) => (
    <RestaurantCardSearch key={restaurant.id} restaurant={restaurant} />
  ));

  const renderLocations = locations.map((location) => (
    <Link
      href={{
        pathname: "/dashboard/search",
        query: {
          ...searchParams,
          city: location.name,
        },
      }}
      className="font-light text-reg"
      key={location.id}
    >
      {location.name}
    </Link>
  ));

  const renderCuisines = cuisines.map((cuisine) => (
    <Link
      href={{
        pathname: "/dashboard/search",
        query: {
          ...searchParams,
          cuisine: cuisine.name,
        },
      }}
      className="font-light text-reg"
      key={cuisine.id}
    >
      {cuisine.name}
    </Link>
  ));

  return (
    <>
      {/* HEADER */}
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <div className="w-1/5">
          <div className="border-b pb-4 flex flex-col">
            <h1 className="mb-2">Region</h1>
            {renderLocations}
          </div>
          <div className="border-b pb-4 mt-3 flex flex-col">
            <h1 className="mb-2">Cuisine</h1>
            {renderCuisines}
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              <Link
                href={{
                  pathname: "/dashboard/search",
                  query: {
                    ...searchParams,
                    price: PRICE.CHEAP,
                  },
                }}
                className="border w-full text-center text-reg font-light rounded-l p-2"
              >
                $
              </Link>
              <Link
                href={{
                  pathname: "/dashboard/search",
                  query: {
                    ...searchParams,
                    price: PRICE.REGULAR,
                  },
                }}
                className="border-r border-t border-b w-full text-reg font-light p-2 text-center"
              >
                $$
              </Link>
              <Link
                href={{
                  pathname: "/dashboard/search",
                  query: {
                    ...searchParams,
                    price: PRICE.EXPENSIVE,
                  },
                }}
                className="border-r border-t text-center border-b w-full text-reg font-light p-2 rounded-r"
              >
                $$$
              </Link>
            </div>
          </div>
        </div>
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6 mx-3">
          {/* RESAURANT CAR */}
          {restaurants.length ? (
            renderRestaurants
          ) : (
            <h2 className="text-center w-[100%] text-lg">
              This city not includes any restaurant.
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
