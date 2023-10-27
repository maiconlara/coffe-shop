import React from "react";
import { Center, HStack, Text, VStack } from "native-base";
import RatingAverage from "../../../src/components/RatingAvarege";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { RatingType } from "../../../app/RatingPage";

interface RatingContainerProps {
  rating: RatingType[];
}

const RatingContainer = ({ rating }: RatingContainerProps) => {
  function ratingAverage() {
    const totalReviews = rating.reduce((acc, item) => {
      return acc + item.totalReviews;
    }, 0);
    const totalStars = rating.reduce((acc, item) => {
      return acc + item.totalReviews * item.id;
    }, 0);
    const average = totalStars / totalReviews;
    return average;
  }
  return (
    <HStack
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
      paddingBottom={4}
      marginTop={8}
    >
      <Center justifyContent={"space-between"} w={"1/2"}>
        <Text fontSize="5xl" fontFamily="text" fontWeight="700">
          {ratingAverage().toFixed(1)}
        </Text>
        <HStack>
          {[1, 2, 3].map((item) => (
            <FontAwesomeIcon icon={faStar} key={item} color="#eab308" />
          ))}
          <FontAwesomeIcon icon={faStarHalfStroke} color="#eab308" />
        </HStack>
        <Text fontSize="md" fontFamily="text" fontWeight="400" color="gray.400">
          (2.5k avaliações)
        </Text>
      </Center>
      <VStack borderLeftColor={"gray.300"} borderLeftWidth={2} paddingLeft={4}>
        {rating.map((item) => (
          <RatingAverage
            key={item.id}
            starsQuantity={item.id}
            totalReviews={item.totalReviews}
          />
        ))}
      </VStack>
    </HStack>
  );
};
export default RatingContainer;