import Card from "@/components/Card";
import { RestaurantCard } from "@/types";
import { PrismaClient } from "@prisma/client";
import { Metadata } from "next";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Home",
};

const getAllRestaurant = async (): Promise<RestaurantCard[]> => {
  const data = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      price: true,
      location: true,
      cuisine: true,
    },
  });
  return data;
};

async function Home() {
  const restaurants = await getAllRestaurant();

  const cards = restaurants.map((rest) => (
    <Card key={rest.id} restaurant={rest} />
  ));
  return (
    <>
      {/* HEADER */}
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
          {/* SEARCH BAR */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded  mr-3 p-2 w-[450px]"
              type="text"
              placeholder="State, city or town"
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white">
              Let's go
            </button>
          </div>
          {/* SEARCH BAR */}
        </div>
      </div>
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        {cards}
      </div>
    </>
  );
}

export default Home;
