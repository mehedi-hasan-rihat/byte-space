import AuthLeft from "@/components/AuthLeft";
import { FormInput } from "@/components/ui/FormInput";
import { AuthButton } from "@/components/ui/AuthButton";
import Link from "next/link";

export default function Register() {
  return (
    <section className="min-h-screen bg-[#003BE2] hero-grid ">
      <div className="max-w-360 mx-auto px-30 py-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 pb-11">
          <svg
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
              fill="#D4FB20"
            />
          </svg>
          <span
            className="text-[22px] font-bold text-white"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            ByteSpace
          </span>
        </Link>

        <div className="flex items-start gap-16">
          <div className="flex-1 space-y-4">
            <h4 className="text-[20px] font-semibold text-[#F5F5F6] font-poppins">
              Sign up and come in{" "}
            </h4>
            <p className="text-lg text-[#F5F5F6] font-normal leading-[160%] max-w-118">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost{" "}
            </p>
            <div className="mt-44">
              <AuthLeft />
            </div>
          </div>

          <div className="w-144.75 shrink-0 rounded-3xl bg-white p-15 pb-10 mt-2">
            {/* Header */}
            <p className="text-[18px] font-no text-[#003BE2]">
              Create an Account
            </p>
            <h2 className="mt-1 text-[44px] font-semibold leading-tight text-[#242528] font-poppins">
              Welcome to ByteSpace{" "}
            </h2>

            <form className="mt-10 mb-30 space-y-5" noValidate>
              <FormInput
                label="Full Name"
                id="fullName"
                type="text"
                placeholder="Jamie Davis"
              />
              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="designer@example.com"
                autoComplete="email"
              />
              <FormInput
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••••"
                autoComplete="current-password"
              />

              <div className="flex justify-end pt-2">
                <AuthButton type="submit">Continue</AuthButton>
              </div>
            </form>

            {/* Footer link */}
            <p className="mt-16 text-center font-normal text-[14px] text-[#888888]">
              Already have an account??{" "}
              <a
                href="/signin"
                className="font-normal text-[#003BE2] hover:underline"
              >
                Login{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
