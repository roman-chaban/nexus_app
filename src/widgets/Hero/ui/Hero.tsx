import { type FC } from "react";

import { HeroDetails } from "./HeroDetails";
import { HeroLogotypes } from "./HeroLogotypes";
import { Section } from "@/shared/ui/Section/Section";

export const Hero: FC = () => {
   return (
      <Section className='h-full w-full'>
         <HeroDetails />
         <HeroLogotypes />
      </Section>
   );
};
