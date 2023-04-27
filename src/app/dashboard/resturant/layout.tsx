import ResturanHeader from "@/components/ResturanHeader";

export default function ResturantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResturanHeader />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
