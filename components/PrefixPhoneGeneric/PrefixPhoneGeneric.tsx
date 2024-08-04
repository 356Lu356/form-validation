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
export interface PrefixPhoneGenericProps {
  labelText?: string;
  labelClassName?: string;
  labelHtmlFor?: string;
  placeholder?: string;
  value?: string;
  items?: SelecterItemsType[];
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: () => void;
  onFocus: (field: string) => void;
}
export default function PrefixPhoneGeneric({
  labelText,
  labelClassName,
  labelHtmlFor,
  placeholder = "Seleccione un valor",
  value = "",
  items,
  name,
  onChange,
  onBlur,
}: Readonly<PrefixPhoneGenericProps>) {
  return (
    <div>
      <LabelGeneric
        text={labelText}
        className={labelClassName}
        htmlFor={labelHtmlFor}
      />
      <Select name={name} value={value}>
        <SelectTrigger className="w-full" onBlur={onBlur}>
          <SelectValue onChange={onChange} placeholder={placeholder}>
            {value}
          </SelectValue>
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
    </div>
  );
}
