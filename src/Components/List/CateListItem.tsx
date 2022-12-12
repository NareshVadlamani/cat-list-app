import { Box, Flex, HStack, Img, Stack, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/chakra";
import { CateDetailsType } from "../../types";
import { StartRating } from "../StartRating/StartRating";

type CateListItemProps = {
  data: CateDetailsType;
};

export const CateListItem = ({ data }: CateListItemProps) => {
  const { id, url, breeds } = data;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/cat/${id}`);
  };

  return (
    <Box
      p={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      onClick={handleNavigation}
    >
      <Stack
        gridGap={4}
        alignItems={{ base: "center", md: "flex-start" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          width={150}
          height={150}
          bg="lightGray.300"
          borderRadius="10px"
          p={2}
        >
          <Img src={url} width={150} borderRadius="10px" />
        </Flex>
        <VStack alignItems="baseline">
          <Box fontSize="xl" py={2}>
            {breeds[0].name}
          </Box>
          <Stack direction={{ base: "column", md: "row" }}>
            <Box>origin : {breeds[0].origin}</Box>
            <Box> life span : {breeds[0].life_span}</Box>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }}>
            <HStack pr={4}>
              <Box>dog friendly :</Box>
              <StartRating rating={3.5} />
            </HStack>
            <HStack>
              <Box>energy_level :</Box>
              <StartRating rating={breeds[0].energy_level} />
            </HStack>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
};
