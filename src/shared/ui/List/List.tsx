import { HTMLAttributes, ReactNode } from "react";

interface ListProps<T extends { id: string | number }>
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  tag: "ul" | "ol";
  renderList: Array<T>;
  renderItem: (listItem: T) => ReactNode;
  getItemKey: (listItem: T) => string | number;
  className?: string;
  itemClassName?: string;
}

export const List = <T extends { id: string | number }>({
  tag: Tag,
  renderItem,
  renderList,
  getItemKey = (item) => item.id,
  className = "",
  itemClassName = "",
  ...props
}: ListProps<T>) => {
  return (
    <Tag className={className} {...props}>
      {renderList.map((item) => (
        <li key={getItemKey(item)} className={itemClassName}>
          {renderItem(item)}
        </li>
      ))}
    </Tag>
  );
};
