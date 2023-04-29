import MenuCard from "@/components/MenuCard";
import ResturanNavbar from "@/components/ResturanNavbar";
import { Item } from "@/types";
import { PrismaClient } from "@prisma/client";
import type { Metadata } from "next";

const prisma = new PrismaClient();

const fetchItemsRestaurant = async (slug: string): Promise<Item[]> => {
  const data = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Item: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          restaurant_id: true,
        },
      },
    },
  });

  return data?.Item as Item[];
};

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.slug,
  };
}

async function ResturantMenu({ params }: Props) {
  const menus = await fetchItemsRestaurant(params.slug);

  const renderMenus = menus.map((menu) => (
    <MenuCard key={menu.id} menu={menu} />
  ));

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <ResturanNavbar slug={params.slug} />
      {/* RESAURANT NAVBAR */} {/* MENU */}
      <main className="bg-white mt-5">
        <div>
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            {/* MENU CARD */}
            {menus.length ? (
              renderMenus
            ) : (
              <h2 className="text-center w-[100%] text-lg">
                The restaurant not have any menu.
              </h2>
            )}
          </div>
        </div>
      </main>
      {/* MENU */}
    </div>
  );
}

export default ResturantMenu;
