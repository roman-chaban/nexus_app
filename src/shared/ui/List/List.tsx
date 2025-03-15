import { HTMLAttributes, ReactNode } from "react";

type ListItemKey = string | number;

interface ListProps<T extends { id: ListItemKey }>
   extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
   tag: "ul" | "ol";
   renderList: Array<T>;
   renderItem: (listItem: T) => ReactNode;
   getItemKey: (listItem: T) => ListItemKey;
   className?: string;
   itemClassName?: string;
}

export const List = <T extends { id: ListItemKey }>({
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
