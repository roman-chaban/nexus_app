import { type FC } from "react";

import { Box } from "@/shared/ui/Box/Box";
import { Heading } from "@/shared/ui/Heading/Heading";
import { Paragraph } from "@/shared/ui/Paragraph/Paragraph";

import { DetailItem } from "../types/detail";

interface HorizonDetail {
   detail: DetailItem;
   stylesDetails: {
      bgColor: string;
      textColor: string;
   };
}

export const HorizonDetail: FC<HorizonDetail> = ({ detail, stylesDetails }) => {
   return (
      <Box
         className={` ${stylesDetails.bgColor} flex min-h-[16.125rem] flex-col gap-[2.1875rem] rounded-[3.125rem] px-12 py-15`}
      >
         <Heading
            level='h3'
            className={`text-[2.5rem] ${stylesDetails.textColor} font-bold`}
         >
            {detail.title}
         </Heading>
         <Paragraph
            className={`text-[1.25rem] ${stylesDetails.textColor} leading-[150%]`}
         >
            {detail.subtitle}
         </Paragraph>
      </Box>
   );
};
