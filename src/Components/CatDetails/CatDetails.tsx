import { Box, Flex, HStack, Img, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import get from "../../network/ajax-request";
import { CateDetailsType } from "../../types";
import { FaArrowLeft } from "react-icons/fa";

export const CatDetails = () => {
  const [cateDetails, setCateDetails] = useState<CateDetailsType>();

  const { catId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(`https://api.thecatapi.com/v1/images/${catId}`).then(
      (data: CateDetailsType) => {
        setCateDetails(data);
      }
    );
  }, [catId]);

  return (
    <HStack py={8} alignItems="flex-start">
      <Flex px={4} onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Flex bg="lightGray.100" borderRadius="10px" p={4}>
          <Img src={cateDetails?.url} borderRadius="10px" />
        </Flex>
        <VStack alignItems="baseline" textAlign="left">
          <Box fontSize="xl">{cateDetails?.breeds[0].name}</Box>
          <Box fontSize="sm">{cateDetails?.breeds[0].description}</Box>
          <Box color="orange">{cateDetails?.breeds[0].temperament}</Box>
          <HStack>
            <HStack>
              <Box fontSize="sm">height : </Box>
              <Box fontWeight="bold"> {cateDetails?.height} cms</Box>
            </HStack>
            <HStack>
              <Box fontSize="sm">weight :</Box>
              <Box fontWeight="bold">
                {cateDetails?.breeds[0].weight.metric} kgs
              </Box>
            </HStack>
          </HStack>
          <HStack>
            <Box fontSize="sm">life span :</Box>
            <Box fontWeight="bold">
              {" "}
              {cateDetails?.breeds[0].life_span} years
            </Box>
          </HStack>
        </VStack>
      </Stack>
    </HStack>
  );
};
