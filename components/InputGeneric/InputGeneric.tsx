import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent } from "react";

export interface InputGenericProps {
  ref: React.RefObject<HTMLInputElement>;
  label?: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  id?: string;
  className?: string;
  inputClassName?: string;
  name?: string;
  value?: string | number;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onBlur: () => void;
  onFocus: (field: string) => void;
}
export default function InputGeneric({
  ref,
  label,
  type,
  placeholder,
  id,
  className,
  inputClassName,
  name,
  value,
  onChange,
  onBlur,
  onFocus,
}: Readonly<InputGenericProps>) {
  return (
    <div className={`${className} grid w-full max-w-sm items-center gap-2`}>
      <Label htmlFor={type}>{label}</Label>
      <Input
        className={`${inputClassName} w-full`}
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={() => onFocus(name as string)}
      />
    </div>
  );
}
