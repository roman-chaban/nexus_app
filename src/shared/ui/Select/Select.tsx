import { ChangeEvent, type HTMLAttributes, type FC } from "react";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  name?: string;
  id?: string;
}

export const Select: FC<SelectProps> = ({
  onChange,
  options,
  value,
  className = "",
  name = "",
  id = "",
  ...props
}) => {
  return (
    <select
      name={name}
      id={id || name}
      value={value}
      onChange={onChange}
      className={className}
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
