import ResturanHeader from "@/components/ResturanHeader";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export default function RestaurantLayout({ children, params }: Props) {
  return (
    <>
      <ResturanHeader name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
