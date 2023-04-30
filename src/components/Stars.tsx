import fullStar from "../assets/icons/full-star.png";
import halfStar from "../assets/icons/half-star.png";
import emptyStar from "../assets/icons/empty-star.png";
import Image from "next/image";

function Stars(): JSX.Element {
  return <Image src={fullStar} alt="t" />;
}

export default Stars;
