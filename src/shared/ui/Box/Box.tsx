import { type HTMLAttributes, type ReactNode, type FC } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
}

export const Box: FC<BoxProps> = ({ children, className = "", ...props }) => {
   return (
      <div className={className} {...props}>
         {children}
      </div>
   );
};
