import { type FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { List } from "@/shared/ui/List/List";

import { navigation } from "../data/navigation";
import { ResizeContainer } from "@/shared/ui/ResizeContainer/ResizeContainer";

export const Header: FC = () => {
   return (
      <header className='w-full'>
         <ResizeContainer>
            <Image
               className='object-cover'
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
                        className='text-2xl font-medium text-white'
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
