import { type FC } from "react";

import Image from "next/image";

import { Box } from "@/shared/ui/Box/Box";
import { List } from "@/shared/ui/List/List";

import { heroLogotypes } from "../data/hero-logotypes";

export const HeroLogotypes: FC = () => {
   return (
      <Box className='mt-25 mb-30 w-full'>
         <List
            tag='ul'
            renderList={heroLogotypes}
            getItemKey={(item) => item.id}
            renderItem={(item) => (
               <Image
                  className='w-auto object-cover'
                  priority
                  src={item.src}
                  alt={item.alt}
                  width={150}
                  height={50}
               />
            )}
            className='flex items-center justify-between gap-5'
            itemClassName='w-fit h-full'
         />
      </Box>
   );
};
