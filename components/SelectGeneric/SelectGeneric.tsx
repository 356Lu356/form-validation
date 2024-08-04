import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LabelGeneric from "../LabelGeneric/LabelGeneric";

export type SelecterItemsType = {
  label: string;
  value: string;
};
export interface SelectGenericProps {
  labelText: string;
  labelClassName?: string;
  labelHtmlFor?: string;
  placeholder?: string;
  value?: string;
  items?: SelecterItemsType[];
  onChange?: (value: string) => void;
}
export function SelectGeneric({
  labelText,
  labelClassName,
  labelHtmlFor,
  placeholder = "Seleccione un valor",
  value = "",
  items,
  onChange,
}: Readonly<SelectGenericProps>) {
  return (
    <>
      <LabelGeneric
        text={labelText}
        className={labelClassName}
        htmlFor={labelHtmlFor}
      />
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder}>{value}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items?.map((item, index) => (
              <SelectItem key={`${index}-${item.value}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
