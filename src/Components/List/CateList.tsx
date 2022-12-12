import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import get from "../../network/ajax-request";

import { CateListType } from "../../types";
import { CateListItem } from "./CateListItem";

export const CateList = () => {
  const [cateListData, setCateListData] = useState<CateListType>([]);

  useEffect(() => {
    get(
      "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1"
    ).then((data: CateListType) => {
      setCateListData(data);
    });
  }, []);

  return (
    <Box p={4}>
      {cateListData.map((cate) => (
        <CateListItem key={cate.id} data={cate} />
      ))}
    </Box>
  );
};
