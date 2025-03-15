import { type HTMLAttributes, type ChangeEvent, forwardRef } from "react";

type InputType = "text" | "email" | "password";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  value: string;
  type: InputType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      id,
      value,
      type,
      placeholder = "",
      onChange,
      className = "",
      readOnly = false,
      disabled = false,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        aria-label={ariaLabel}
        readOnly={readOnly}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
