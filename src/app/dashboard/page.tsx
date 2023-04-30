import Card from "@/components/Card";
import Header from "@/components/Header";
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
      reviews: true,
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
      <Header />
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        {cards}
      </div>
    </>
  );
}

export default Home;
