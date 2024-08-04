import { Label } from "@/components/ui/label";
import React from "react";

export interface LabelGenericProps {
  htmlFor?: string;
  text?: string;
  className?: string;
}
export default function LabelGeneric({
  htmlFor,
  text = "Label",
  className,
}: Readonly<LabelGenericProps>) {
  return (
    <Label className={className} htmlFor={htmlFor}>
      {text}
    </Label>
  );
}
