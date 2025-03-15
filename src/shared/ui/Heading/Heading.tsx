import { type HTMLAttributes, type ReactNode, type FC } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: FC<HeadingProps> = ({
  children,
  level: Tag,
  className = "",
  ...props
}) => {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};
