import { PRICE } from "@prisma/client";

function Price({ price }: { price: PRICE }): JSX.Element {
  let renderPrice = <span>$$$$</span>;

  if (price === PRICE.CHEAP) {
    renderPrice = (
      <>
        <span>$</span> <span className=" text-gray-400">$$</span>
      </>
    );
  }
  if (price === PRICE.REGULAR) {
    renderPrice = (
      <>
        <span>$$</span> <span className=" text-gray-400">$$</span>
      </>
    );
  }

  return <p className="flex mr-3">{renderPrice}</p>;
}

export default Price;
