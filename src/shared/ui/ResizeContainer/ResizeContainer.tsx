import { type HTMLAttributes, type FC, type ReactNode } from "react";

interface ResizeContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
   tag: "div" | "main";
}

export const ResizeContainer: FC<ResizeContainerProps> = ({
   children,
   tag: Tag,
   className = "",
}) => {
   return (
      <Tag
         className={`mx-auto h-full w-full max-w-[102.5rem] px-25 max-[75rem]:px-10 ${className}`}
      >
         {children}
      </Tag>
   );
};
