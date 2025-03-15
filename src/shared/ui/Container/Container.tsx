import { type HTMLAttributes, type ReactNode, type FC } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
   style?: React.CSSProperties;
}

export const Container: FC<ContainerProps> = ({
   children,
   className = "",
   style,
   ...props
}) => {
   return (
      <div className={className} style={style} {...props}>
         {children}
      </div>
   );
};
