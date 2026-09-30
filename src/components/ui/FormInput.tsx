import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function FormInput({ label, id, className, ...props }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[14px] font-medium text-[#242528]">
        {label}
      </label>
      <input
        id={id}
        className={[
          "h-13 w-full rounded-xl border border-[#E5E6E8] px-4",
          "text-[15px] text-[#242528] outline-none",
          "placeholder:text-[#82868E]",
          "focus:border-[#003BE2] transition-colors",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </div>
  );
}
