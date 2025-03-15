import { type HTMLAttributes, type ReactNode, type FC } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
   children: ReactNode;
   className?: string;
}

export const Section: FC<SectionProps> = ({
   children,
   className = "",
   ...props
}) => {
   return (
      <section className={className} {...props}>
         {children}
      </section>
   );
};
