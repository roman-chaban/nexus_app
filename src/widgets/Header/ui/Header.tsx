import { type FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/shared/ui/Container/Container";
import { List } from "@/shared/ui/List/List";

import { navigation } from "../data/navigation";

export const Header: FC = () => {
   return (
      <header className='w-full'>
         <Container className='mx-auto flex w-full max-w-[90rem] items-center justify-between px-25 pt-10 pb-15 max-[71.875rem]:px-10'>
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
         </Container>
      </header>
   );
};
