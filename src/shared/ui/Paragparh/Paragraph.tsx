import { type HTMLAttributes, type ReactNode, type FC } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};
