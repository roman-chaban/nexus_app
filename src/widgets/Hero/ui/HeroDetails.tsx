import { type FC } from "react";

import { Button } from "@/shared/ui/Button/Button";
import { Heading } from "@/shared/ui/Heading/Heading";
import { ArrowTop } from "@/shared/ui/Icons/ArrowTop/ArrowTop";
import { Paragraph } from "@/shared/ui/Paragraph/Paragraph";
import { Box } from "@/shared/ui/Box/Box";

export const HeroDetails: FC = () => {
   return (
      <Box className='bg-hero-bg h-full rounded-[3.125rem] px-15 py-19 max-[75rem]:px-10 max-[75rem]:py-10'>
         <Box className='flex items-center justify-between'>
            <span className='text-medium-text leading-medium font-bold max-[75rem]:text-lg'>
               OCTOBER 15-17, 2052
            </span>
            <span className='text-medium-text leading-medium font-bold max-[75rem]:text-lg'>
               Horizon Convention Center, TechCity, Utopolis
            </span>
         </Box>
         <Box className='h-full w-full bg-[url(/hero/hero-bg.svg)] bg-right bg-no-repeat max-[75rem]:bg-[auto_17.875rem]'>
            <Heading
               level='h1'
               className='w-full pt-20 text-[6.25rem] font-bold max-[75rem]:pt-15 max-[75rem]:text-6xl'
            >
               NEXT-GEN AI SUMMIT
            </Heading>
            <Paragraph className='text-medium-text leading-medium w-full max-w-[58rem] pt-[1.875rem] max-[75rem]:max-w-[45rem] max-[75rem]:text-lg'>
               Explore the cutting-edge innovations shaping the future of
               artificial intelligence. Join global leaders and visionaries for
               two days of insights, discussions, and breakthroughs.
            </Paragraph>
            <Button className='gradient__button'>
               Early bird tickets <ArrowTop />
            </Button>
         </Box>
      </Box>
   );
};
