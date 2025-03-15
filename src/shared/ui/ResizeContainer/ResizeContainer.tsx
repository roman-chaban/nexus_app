import { type HTMLAttributes, type FC, type ReactNode } from "react";

interface ResizeContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
}

export const ResizeContainer: FC<ResizeContainerProps> = ({
   children,
   className = "",
}) => {
   return (
      <div
         className={`mx-auto flex w-full max-w-[90rem] items-center justify-between px-25 pt-10 pb-15 sm:px-10 md:px-15 ${className}`}
      >
         {children}
      </div>
   );
};
