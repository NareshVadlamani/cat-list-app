import { Flex } from "@chakra-ui/layout";
import { FaStar, FaStarHalf } from "react-icons/fa";
import StarRatings from "react-star-ratings";

type StartRatingProps = {
  rating: number;
};

export const StartRating = ({ rating }: StartRatingProps) => {
  // const isDecimal = count % 1 != 0;
  // const upperLimit = Math.ceil(count);
  // const imgArray = new Array(5).fill(1, 0, Math.ceil(upperLimit));
  // return (
  //   <Flex>
  //     {imgArray.map((a, i) => (
  //       <>
  //         {isDecimal && i === upperLimit - 1 ? (
  //           <>
  //             <FaStarHalf color="orange" />
  //             <FaStarHalf color="gray" transform="rotate(180deg)" />
  //           </>
  //         ) : (
  //           <FaStar color={upperLimit < i ? "gray" : "orange"} />
  //         )}
  //       </>
  //     ))}
  //   </Flex>
  // );

  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      name="rating"
      starDimension="15px"
      starSpacing="1px"
    />
  );
};
