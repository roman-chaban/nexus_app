import { type FC } from "react";

import { Box } from "@/shared/ui/Box/Box";

import { details } from "../data/details";
import { HorizonDetail } from "./HorizonDetail";

export const HorizonDetails: FC = () => {
   return (
      <Box className='flex w-full flex-1 flex-col justify-between gap-5'>
         {details.map((detail) => {
            const stylesDetails = {
               bgColor:
                  detail.id % 2 === 1 ? "bg-speakers-bg" : "bg-speakers-gray",
               textColor: detail.id % 2 === 1 ? "text-white" : "text-black",
            };

            return (
               <HorizonDetail
                  detail={detail}
                  key={detail.id}
                  stylesDetails={stylesDetails}
               />
            );
         })}
      </Box>
   );
};
