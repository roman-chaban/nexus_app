import { type FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { ResizeContainer } from "@/shared/ui/ResizeContainer/ResizeContainer";
import { List } from "@/shared/ui/List/List";

import { navigation } from "../data/navigation";

export const Header: FC = () => {
   return (
      <header className='w-full'>
         <ResizeContainer
            tag='div'
            className='flex items-center justify-between pt-10 pb-15 max-[75rem]:pb-10'
         >
            <Image
               className='object-cover max-[75rem]:max-w-[7rem]'
               src={"/icons/logo/nexus.svg"}
               alt='Nexus Logo'
               width={164}
               height={60}
               priority
            />
            <nav className='flex w-full justify-end'>
               <List
                  tag='ul'
                  renderList={navigation}
                  getItemKey={(item) => item.id}
                  renderItem={(item) => (
                     <Link
                        href={item.href}
                        className='text-2xl font-medium text-white max-[75rem]:text-lg'
                     >
                        {item.label}
                     </Link>
                  )}
                  className='flex max-w-fit items-center gap-7'
               />
            </nav>
         </ResizeContainer>
      </header>
   );
};
