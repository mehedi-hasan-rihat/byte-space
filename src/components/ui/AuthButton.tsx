import { ButtonHTMLAttributes } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
}

export function AuthButton({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: AuthButtonProps) {
  const base =
    "h-11 cursor-pointer rounded-full px-6 text-[18px] transition inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[#D4FB20] text-[#242528] hover:bg-[#c5ec16]",
    outline: "border border-[#CED0D3] bg-white text-[#040819] hover:bg-[#F5F5F6]",
  };

  return (
    <button
      className={[base, variants[variant], fullWidth ? "w-full" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
