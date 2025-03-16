import { type FC } from "react";

import { Section } from "@/shared/ui/Section/Section";
import { HorizonSpeakers } from "./HorizonSpeakers";
import { HorizonDetails } from "./HorizonDetails";

export const Horizon: FC = () => {
   return (
      <Section className='flex gap-5'>
         <HorizonSpeakers />
         <HorizonDetails />
      </Section>
   );
};
