import { Fragment, type FC } from "react";

import Image from "next/image";

import { Box } from "@/shared/ui/Box/Box";
import { speakers } from "../data/speakers";
import { Heading } from "@/shared/ui/Heading/Heading";
import { Button } from "@/shared/ui/Button/Button";
import { Paragraph } from "@/shared/ui/Paragraph/Paragraph";

export const HorizonSpeakers: FC = () => {
   return (
      <Fragment>
         {speakers.map((speaker) => (
            <Box
               key={speaker.id}
               className='bg-speakers-bg box-border flex min-h-[35.5625rem] w-full max-w-[33.25rem] flex-2 flex-col justify-between rounded-[3.125rem] px-12 py-15'
            >
               <Box className='flex flex-col'>
                  <Heading
                     level='h3'
                     className='pb-[2.1875rem] text-[2.5rem] font-bold'
                  >
                     {speaker.title}
                  </Heading>
                  <Box className='flex gap-14'>
                     <Button className='flex h-20 w-full max-w-20 items-center justify-center rounded-[100%] bg-white'>
                        <Image
                           src={speaker.buttonUp}
                           priority
                           alt='Arrow blue up icon'
                           width={24}
                           height={24}
                        />
                     </Button>
                     <Paragraph className='text-[1.25rem] leading-[150%] text-white'>
                        {speaker.subtitle}
                     </Paragraph>
                  </Box>
               </Box>
               <Box className='flex'>
                  <Box className='relative flex h-full w-full'>
                     {speaker.icons.map((icon, index) => (
                        <Image
                           className='absolute w-auto'
                           key={icon.id}
                           src={icon.icon}
                           priority
                           alt='Person Icon'
                           width={74}
                           height={74}
                           style={{
                              left: `${index * 38}px`,
                           }}
                        />
                     ))}
                  </Box>
                  <Button className='flex w-full max-w-[13.4375rem] items-center justify-center gap-5 rounded-[6.25rem] border-[1px] border-solid border-white px-[1.9375rem] py-[1.375rem] text-[1.5625rem]'>
                     And more
                     <Image
                        className='w-auto'
                        src={speaker.buttonMore.icon}
                        priority
                        alt='Arrow white icon'
                        width={24}
                        height={24}
                     />
                  </Button>
               </Box>
            </Box>
         ))}
      </Fragment>
   );
};
