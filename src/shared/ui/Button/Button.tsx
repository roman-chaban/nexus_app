import {
   type HTMLAttributes,
   type ReactNode,
   type FC,
   type ElementType,
   type CSSProperties,
} from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
   children: ReactNode;
   className?: string;
   as?: ElementType;
   style?: CSSProperties;
   disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
   children,
   className = "",
   as: Component = "button",
   style,
   disabled = false,
   ...props
}) => {
   return (
      <Component
         className={className}
         style={style}
         disabled={disabled}
         {...props}
      >
         {children}
      </Component>
   );
};
